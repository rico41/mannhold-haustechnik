import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { company } from "@/lib/data/company";

// Resend wird nur initialisiert, wenn der API Key vorhanden ist
// Dies verhindert Build-Fehler, wenn der Key noch nicht gesetzt ist
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new Resend(apiKey);
};

// ============ TYPES ============

type BaseContactFormData = {
  name: string;
  email: string;
  phone?: string;
  plz: string;
  anliegen?: string;
  nachricht?: string;
};

type UploadedFile = {
  name: string;
  type: string;
  size: number;
  base64: string;
};

type MultiStepFormData = BaseContactFormData & {
  formType: "multistep";
  category: "modernisierung" | "wartung" | "reparatur" | "planung";
  zeitrahmen?: "sofort" | "3-6_monate";
  strasse?: string;
  ort?: string;
  details?: Record<string, unknown> & {
    dateien?: UploadedFile[];
  };
  serviceArea?: {
    isCovered: boolean;
    location?: {
      id: string;
      name: string;
      distanceInfo: string;
    };
  };
};

type ContactFormData = BaseContactFormData | MultiStepFormData;

// ============ HELPER FUNCTIONS ============

const isMultiStepForm = (data: ContactFormData): data is MultiStepFormData => {
  return "formType" in data && data.formType === "multistep";
};

const getCategoryLabel = (category: string): string => {
  const labels: Record<string, string> = {
    modernisierung: "Neue Heizung / Modernisierung",
    wartung: "Wartung & Service",
    reparatur: "Reparatur / Störung",
    planung: "Planung & Optimierung",
  };
  return labels[category] || category;
};

const getDetailLabels = (category: string): Record<string, string> => {
  const labels: Record<string, Record<string, string>> = {
    modernisierung: {
      systemTyp: "Gewünschtes System",
      gebaeudeTyp: "Gebäudetyp",
      baujahr: "Baujahr Gebäude",
      wohnflaeche: "Wohnfläche (m²)",
      aktuelleHeizung: "Aktuelle Heizung",
      waermeverteilung: "Wärmeverteilung",
      pvAnlage: "PV-Anlage",
    },
    wartung: {
      geraeteTyp: "Gerätetyp",
      hersteller: "Hersteller",
      modell: "Modell",
      geraeeBaujahr: "Baujahr Gerät",
      letzteWartung: "Letzte Wartung",
      maengel: "Bekannte Mängel",
      maengelBeschreibung: "Mängelbeschreibung",
    },
    reparatur: {
      problemArt: "Problem",
      dringlichkeit: "Dringlichkeit",
      hersteller: "Hersteller",
      fehlercode: "Fehlercode",
      beschreibung: "Beschreibung",
    },
    planung: {
      leistungsTyp: "Leistung",
      grund: "Grund",
      bauplaeneVorhanden: "Baupläne vorhanden",
    },
  };
  return labels[category] || {};
};

const getValueLabel = (key: string, value: string): string => {
  const valueLabels: Record<string, Record<string, string>> = {
    systemTyp: {
      waermepumpe: "Wärmepumpe",
      gas: "Gasheizung",
      hybrid: "Hybrid-System",
      fussbodenheizung: "Fußbodenheizung (Nachrüsten)",
      beratung: "Noch unsicher / Beratung",
    },
    gebaeudeTyp: {
      einfamilienhaus: "Einfamilienhaus",
      mehrfamilienhaus: "Mehrfamilienhaus",
      reihenhaus: "Reihenhaus / Doppelhaushälfte",
      wohnung: "Wohnung",
    },
    baujahr: {
      vor_1990_unsaniert: "Vor 1990 (unsaniert)",
      vor_1990_saniert: "Vor 1990 (teilsaniert)",
      "1990_2010": "1990 – 2010",
      nach_2010: "Nach 2010 / Neubau",
    },
    aktuelleHeizung: {
      oel: "Öl",
      gas: "Gas",
      nachtspeicher: "Strom / Nachtspeicher",
      fernwaerme: "Fernwärme",
      sonstiges: "Sonstiges",
    },
    waermeverteilung: {
      heizkoerper: "Nur Heizkörper",
      fussbodenheizung: "Nur Fußbodenheizung",
      gemischt: "Gemischt (Heizkörper + FBH)",
    },
    pvAnlage: {
      ja: "Ja",
      nein: "Nein",
      geplant: "Geplant",
    },
    geraeteTyp: {
      gastherme: "Gastherme / Gaskessel",
      waermepumpe: "Wärmepumpe",
      sonstiges: "Sonstiges",
    },
    hersteller: {
      vaillant: "Vaillant",
      viessmann: "Viessmann",
      buderus: "Buderus",
      wolf: "Wolf",
      ovum: "OVUM",
      bosch: "Bosch / Junkers",
      sonstige: "Sonstige / Unbekannt",
    },
    letzteWartung: {
      letztes_jahr: "Letztes Jahr",
      vor_2_3_jahren: "Vor 2–3 Jahren",
      laenger_her: "Länger her / Unbekannt",
    },
    maengel: {
      ja: "Ja",
      nein: "Nein",
    },
    problemArt: {
      keine_waerme: "Heizung komplett ausgefallen (Kalt)",
      kein_warmwasser: "Kein Warmwasser",
      wasserverlust: "Wasserverlust / Tropft",
      fehlermeldung: "Fehlermeldung im Display",
      geraeusche: "Geräusche / Klopfen",
      sonstiges: "Sonstiges",
    },
    dringlichkeit: {
      notfall: "⚠️ Notfall (Totalausfall)",
      wichtig: "Wichtig (zeitnah beheben)",
      normal: "Hat Zeit (normaler Termin)",
    },
    leistungsTyp: {
      heizlastberechnung: "Heizlastberechnung",
      hydraulischer_abgleich: "Hydraulischer Abgleich",
      energieberatung: "Allgemeine Energieberatung",
    },
    grund: {
      foerderantrag: "Für Förderantrag (BAFA/KfW)",
      optimierung: "Heizung wird nicht richtig warm",
      planung: "Planung für Neubau / Sanierung",
    },
    bauplaeneVorhanden: {
      ja_digital: "Ja, digital vorhanden",
      ja_papier: "Ja, in Papierform",
      nein: "Nein / Unvollständig",
    },
  };

  return valueLabels[key]?.[value] || value;
};

// ============ EMAIL TEMPLATES ============

const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const generateMultiStepEmailHtml = (data: MultiStepFormData): string => {
  const categoryLabel = getCategoryLabel(data.category);
  const detailLabels = getDetailLabels(data.category);
  const details = data.details || {};
  const files = details.dateien || [];

  // Details-Tabelle generieren (ohne dateien)
  let detailsHtml = "";
  for (const [key, value] of Object.entries(details)) {
    if (key === "dateien") continue; // Dateien separat behandeln
    if (value && typeof value === "string" && value.trim()) {
      const label = detailLabels[key] || key;
      const displayValue = getValueLabel(key, value);
      detailsHtml += `
        <tr>
          <td style="padding: 8px 0; font-weight: bold; width: 180px;">${label}:</td>
          <td style="padding: 8px 0;">${displayValue}</td>
        </tr>
      `;
    }
  }

  // Datei-Info HTML generieren
  const filesHtml = files.length > 0 ? `
    <h2 style="color: #F7941D; margin-top: 30px;">📎 Hochgeladene Dateien (${files.length})</h2>
    <div style="background-color: white; padding: 15px; border-radius: 8px; border: 1px solid #ddd;">
      ${files.map((file: UploadedFile) => `
        <div style="display: flex; align-items: center; gap: 10px; padding: 8px 0; border-bottom: 1px solid #eee;">
          <span style="font-size: 20px;">${file.type.startsWith('image/') ? '🖼️' : '📄'}</span>
          <div>
            <strong>${file.name}</strong><br>
            <span style="font-size: 12px; color: #666;">${formatFileSize(file.size)} · ${file.type}</span>
          </div>
        </div>
      `).join('')}
      <p style="margin: 10px 0 0 0; font-size: 12px; color: #666; font-style: italic;">
        Dateien sind als Anhang beigefügt.
      </p>
    </div>
  ` : "";

  // Service Area Badge
  const serviceAreaBadge = data.serviceArea?.isCovered
    ? `<span style="background-color: #10B981; color: white; padding: 4px 12px; border-radius: 12px; font-size: 12px;">✓ Im Leistungsgebiet (${data.serviceArea.location?.name})</span>`
    : `<span style="background-color: #F59E0B; color: white; padding: 4px 12px; border-radius: 12px; font-size: 12px;">Außerhalb Kerngebiet</span>`;

  // Dringlichkeits-Banner für Notfälle
  const urgencyBanner =
    data.category === "reparatur" && details.dringlichkeit === "notfall"
      ? `<div style="background-color: #FEE2E2; border: 2px solid #EF4444; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
          <strong style="color: #B91C1C;">⚠️ NOTFALL-ANFRAGE</strong>
          <p style="margin: 5px 0 0 0; color: #B91C1C;">Der Kunde benötigt schnellstmöglich Hilfe!</p>
        </div>`
      : "";

  return `
    <!DOCTYPE html>
    <html lang="de">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Neue Anfrage: ${categoryLabel}</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #F7941D; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">Neue Anfrage</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">${categoryLabel}</p>
        </div>
        <div style="background-color: #f9f9f9; padding: 30px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px;">
          ${urgencyBanner}
          
          <div style="margin-bottom: 20px;">
            ${serviceAreaBadge}
          </div>

          ${data.zeitrahmen ? `
          <div style="background-color: #dcfce7; border: 1px solid #22c55e; padding: 12px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0; font-weight: bold; color: #166534;">Zeitrahmen: ${data.zeitrahmen === "sofort" ? "Sofort / Akuter Handlungsbedarf" : "In den nächsten 3–6 Monaten"}</p>
          </div>
          ` : ""}
          <h2 style="color: #F7941D; margin-top: 0;">Kontaktdaten</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 180px;">Name:</td>
              <td style="padding: 8px 0;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">E-Mail:</td>
              <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #0089CF;">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Telefon:</td>
              <td style="padding: 8px 0;">${data.phone || "Nicht angegeben"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Adresse:</td>
              <td style="padding: 8px 0;">${data.strasse || ""}<br>${data.plz}${data.ort ? ` ${data.ort}` : ""}</td>
            </tr>
          </table>

          ${detailsHtml ? `
            <h2 style="color: #F7941D; margin-top: 30px;">Details zur Anfrage</h2>
            <table style="width: 100%; border-collapse: collapse;">
              ${detailsHtml}
            </table>
          ` : ""}
          
          ${data.nachricht ? `
            <h2 style="color: #F7941D; margin-top: 30px;">Nachricht</h2>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #F7941D; margin-top: 10px;">
              <p style="margin: 0; white-space: pre-wrap;">${data.nachricht}</p>
            </div>
          ` : ""}

          ${filesHtml}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
            <p style="margin: 0;">Eingegangen am: ${new Date().toLocaleString("de-DE", { 
              day: "2-digit", 
              month: "2-digit", 
              year: "numeric", 
              hour: "2-digit", 
              minute: "2-digit" 
            })}</p>
            <p style="margin: 5px 0 0 0;">Formular-Typ: Geführte Anfrage (Multi-Step)</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

const generateStandardEmailHtml = (data: BaseContactFormData, anliegenLabel: string): string => {
  return `
    <!DOCTYPE html>
    <html lang="de">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Neue Kontaktanfrage</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #F7941D; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">Neue Kontaktanfrage</h1>
        </div>
        <div style="background-color: #f9f9f9; padding: 30px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px;">
          <h2 style="color: #F7941D; margin-top: 0;">Kontaktdaten</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 150px;">Name:</td>
              <td style="padding: 8px 0;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">E-Mail:</td>
              <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #0089CF;">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Telefon:</td>
              <td style="padding: 8px 0;">${data.phone || "Nicht angegeben"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">PLZ/Ort:</td>
              <td style="padding: 8px 0;">${data.plz}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Anliegen:</td>
              <td style="padding: 8px 0;">${anliegenLabel}</td>
            </tr>
          </table>
          
          ${data.nachricht ? `
            <h2 style="color: #F7941D; margin-top: 30px;">Nachricht</h2>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #F7941D; margin-top: 10px;">
              <p style="margin: 0; white-space: pre-wrap;">${data.nachricht}</p>
            </div>
          ` : ""}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
            <p style="margin: 0;">Eingegangen am: ${new Date().toLocaleString("de-DE", { 
              day: "2-digit", 
              month: "2-digit", 
              year: "numeric", 
              hour: "2-digit", 
              minute: "2-digit" 
            })}</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

// ============ WEBHOOK ============

const sendToWebhook = async (data: MultiStepFormData): Promise<void> => {
  const webhookUrl = process.env.PLANNING_WEBHOOK_URL;
  const webhookSecret = process.env.PLANNING_WEBHOOK_SECRET;

  if (!webhookUrl) {
    return;
  }

  // Nur bestimmte Kategorien an die Planungssoftware senden
  const relevantCategories = ["modernisierung", "wartung", "reparatur"];
  if (!relevantCategories.includes(data.category)) {
    return;
  }

  const payload = {
    requestId: crypto.randomUUID(),
    source: "website",
    receivedAt: new Date().toISOString(),
    contact: {
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      address: {
        street: data.strasse || null,
        plz: data.plz,
        city: data.ort || null,
      },
    },
    category: data.category,
    categoryLabel: getCategoryLabel(data.category),
    message: data.nachricht || null,
    details: data.details || {},
    serviceArea: data.serviceArea || null,
  };

  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (webhookSecret) {
      headers["Authorization"] = `Bearer ${webhookSecret}`;
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error(`Webhook fehlgeschlagen: ${response.status} ${response.statusText}`);
    } else {
      console.log(`Webhook erfolgreich gesendet: ${data.category}`);
    }
  } catch (error) {
    console.error("Webhook-Fehler:", error);
    // Fehler beim Webhook soll nicht die Hauptanfrage blockieren
  }
};

// ============ MAIN HANDLER ============

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.plz) {
      return NextResponse.json(
        { error: "Bitte füllen Sie alle Pflichtfelder aus." },
        { status: 400 }
      );
    }

    // Für Standard-Formular: anliegen ist erforderlich
    if (!isMultiStepForm(data) && !data.anliegen) {
      return NextResponse.json(
        { error: "Bitte wählen Sie ein Anliegen aus." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." },
        { status: 400 }
      );
    }

    // Map anliegen to readable label (für Standard-Formular)
    const anliegenLabels: Record<string, string> = {
      waermepumpe: "Wärmepumpe Installation",
      gastherme: "Gasthermen-Service",
      fussbodenheizung: "Fußbodenheizung",
      "hydraulischer-abgleich": "Hydraulischer Abgleich",
      heizlastberechnung: "Heizlastberechnung",
      wartung: "Wartung & Service",
      beratung: "Allgemeine Beratung",
      sonstiges: "Sonstiges",
    };

    // E-Mail generieren
    let emailSubject: string;
    let emailHtml: string;

    if (isMultiStepForm(data)) {
      const categoryLabel = getCategoryLabel(data.category);
      const isUrgent = data.category === "reparatur" && data.details?.dringlichkeit === "notfall";
      emailSubject = isUrgent
        ? `⚠️ NOTFALL: ${categoryLabel}`
        : `Neue Anfrage: ${categoryLabel}`;
      emailHtml = generateMultiStepEmailHtml(data);
    } else {
      const anliegenLabel = anliegenLabels[data.anliegen || ""] || data.anliegen || "Unbekannt";
      emailSubject = `Neue Kontaktanfrage: ${anliegenLabel}`;
      emailHtml = generateStandardEmailHtml(data, anliegenLabel);
    }

    // E-Mail an das Unternehmen senden
    const resend = getResend();
    if (resend) {
      try {
        const fromEmail = (
          process.env.RESEND_FROM_EMAIL ||
          `Kontaktformular <noreply@${process.env.RESEND_DOMAIN || "mannhold-haustechnik.de"}>`
        ).replace(/^["']|["']$/g, "");

        // Attachments vorbereiten (nur für Multi-Step-Formular)
        const attachments: { filename: string; content: Buffer }[] = [];
        if (isMultiStepForm(data) && data.details?.dateien) {
          for (const file of data.details.dateien) {
            // Base64-Daten extrahieren (Format: "data:image/png;base64,...")
            const base64Data = file.base64.split(",")[1];
            if (base64Data) {
              attachments.push({
                filename: file.name,
                content: Buffer.from(base64Data, "base64"),
              });
            }
          }
        }

        await resend.emails.send({
          from: fromEmail,
          to: company.contact.email,
          replyTo: data.email,
          subject: emailSubject,
          html: emailHtml,
          attachments: attachments.length > 0 ? attachments : undefined,
        });

        // Optional: Bestätigungs-E-Mail an den Kunden senden
        if (process.env.SEND_CONFIRMATION_EMAIL === "true") {
          const anliegenText = isMultiStepForm(data)
            ? getCategoryLabel(data.category)
            : anliegenLabels[data.anliegen || ""] || data.anliegen || "Ihre Anfrage";

          const confirmationHtml = `
            <!DOCTYPE html>
            <html lang="de">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
              </head>
              <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background-color: #F7941D; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
                  <h1 style="margin: 0; font-size: 24px;">Vielen Dank für Ihre Anfrage!</h1>
                </div>
                <div style="background-color: #f9f9f9; padding: 30px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px;">
                  <p>Hallo ${data.name},</p>
                  <p>vielen Dank für Ihre Anfrage bei ${company.name}. Wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich bei Ihnen melden – in der Regel innerhalb von 24 Stunden.</p>
                  <p><strong>Ihr Anliegen:</strong> ${anliegenText}</p>
                  ${data.nachricht ? `<p><strong>Ihre Nachricht:</strong><br>${data.nachricht}</p>` : ""}
                  <p>Bei dringenden Anliegen erreichen Sie uns auch telefonisch unter <a href="tel:${company.contact.phone}" style="color: #0089CF;">${company.contact.phoneDisplay}</a>.</p>
                  <p>Mit freundlichen Grüßen<br><strong>${company.name}</strong></p>
                  <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
                  <p style="font-size: 12px; color: #666;">
                    ${company.name}<br>
                    ${company.address.street}, ${company.address.zip} ${company.address.city}<br>
                    Tel: ${company.contact.phoneDisplay} | E-Mail: ${company.contact.email}
                  </p>
                </div>
              </body>
            </html>
          `;

          await resend.emails.send({
            from: fromEmail,
            to: data.email,
            subject: `Ihre Anfrage bei ${company.name}`,
            html: confirmationHtml,
          });
        }
      } catch (emailError) {
        console.error("Fehler beim Versenden der E-Mail:", emailError);
        // Weiterleiten trotz E-Mail-Fehler, damit der Benutzer eine Bestätigung erhält
      }
    } else {
      // Fallback: Logging wenn kein API Key gesetzt ist
      console.log("=== Neue Kontaktanfrage ===");
      console.log("Name:", data.name);
      console.log("E-Mail:", data.email);
      console.log("Telefon:", data.phone || "Nicht angegeben");
      console.log("PLZ/Ort:", data.plz);
      if (isMultiStepForm(data)) {
        console.log("Kategorie:", getCategoryLabel(data.category));
        console.log("Details:", JSON.stringify(data.details, null, 2));
      } else {
        console.log("Anliegen:", anliegenLabels[data.anliegen || ""] || data.anliegen);
      }
      console.log("Nachricht:", data.nachricht || "Keine Nachricht");
      console.log("Zeitpunkt:", new Date().toLocaleString("de-DE"));
      console.log("===========================");
      console.warn("⚠️ RESEND_API_KEY nicht gesetzt - E-Mail wird nicht versendet!");
    }

    // Webhook an Planungssoftware senden (nur für Multi-Step-Formular)
    if (isMultiStepForm(data)) {
      // Fire-and-forget: Nicht auf Webhook warten
      sendToWebhook(data).catch((err) => {
        console.error("Webhook-Fehler (async):", err);
      });
    }

    return NextResponse.json(
      { message: "Anfrage erfolgreich gesendet" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fehler bei der Kontaktanfrage:", error);
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut." },
      { status: 500 }
    );
  }
}
