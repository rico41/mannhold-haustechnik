import { NextRequest, NextResponse } from "next/server";

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

    // Log the contact request (in production, you would send an email here)
    console.log("=== Neue Kontaktanfrage ===");
    console.log("Name:", data.name);
    console.log("E-Mail:", data.email);
    console.log("Telefon:", data.phone || "Nicht angegeben");
    console.log("PLZ/Ort:", data.plz);
    console.log("Anliegen:", anliegenLabels[data.anliegen] || data.anliegen);
    console.log("Nachricht:", data.nachricht || "Keine Nachricht");
    console.log("Zeitpunkt:", new Date().toLocaleString("de-DE"));
    console.log("===========================");

    // In production, implement email sending here
    // Example with nodemailer or similar:
    // await sendEmail({
    //   to: "info@mannhold-haustechnik.de",
    //   subject: `Neue Kontaktanfrage: ${anliegenLabels[data.anliegen]}`,
    //   html: `
    //     <h2>Neue Kontaktanfrage</h2>
    //     <p><strong>Name:</strong> ${data.name}</p>
    //     <p><strong>E-Mail:</strong> ${data.email}</p>
    //     <p><strong>Telefon:</strong> ${data.phone || "Nicht angegeben"}</p>
    //     <p><strong>PLZ/Ort:</strong> ${data.plz}</p>
    //     <p><strong>Anliegen:</strong> ${anliegenLabels[data.anliegen]}</p>
    //     <p><strong>Nachricht:</strong></p>
    //     <p>${data.nachricht || "Keine Nachricht"}</p>
    //   `,
    // });

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
