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

type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  plz: string;
  anliegen: string;
  nachricht?: string;
};

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.plz || !data.anliegen) {
      return NextResponse.json(
        { error: "Bitte füllen Sie alle Pflichtfelder aus." },
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

    // Map anliegen to readable label
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

    // E-Mail an das Unternehmen senden
    const emailSubject = `Neue Kontaktanfrage: ${anliegenLabels[data.anliegen] || data.anliegen}`;
    const emailHtml = `
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
                <td style="padding: 8px 0;">${anliegenLabels[data.anliegen] || data.anliegen}</td>
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

    // E-Mail an das Unternehmen senden
    const resend = getResend();
    if (resend) {
      try {
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || `Kontaktformular <noreply@${process.env.RESEND_DOMAIN || "mannhold-haustechnik.de"}>`,
          to: company.contact.email,
          replyTo: data.email,
          subject: emailSubject,
          html: emailHtml,
        });

        // Optional: Bestätigungs-E-Mail an den Kunden senden
        if (process.env.SEND_CONFIRMATION_EMAIL === "true") {
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
                  <p><strong>Ihr Anliegen:</strong> ${anliegenLabels[data.anliegen] || data.anliegen}</p>
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
            from: process.env.RESEND_FROM_EMAIL || `Kontaktformular <noreply@${process.env.RESEND_DOMAIN || "mannhold-haustechnik.de"}>`,
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
      console.log("Anliegen:", anliegenLabels[data.anliegen] || data.anliegen);
      console.log("Nachricht:", data.nachricht || "Keine Nachricht");
      console.log("Zeitpunkt:", new Date().toLocaleString("de-DE"));
      console.log("===========================");
      console.warn("⚠️ RESEND_API_KEY nicht gesetzt - E-Mail wird nicht versendet!");
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
