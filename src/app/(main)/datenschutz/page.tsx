import type { Metadata } from "next";
import { company } from "@/lib/data";
import { CookieSettingsLink } from "@/components/common/CookieSettingsLink";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der Mannhold Haustechnik GmbH, Berlin.",
};

export default function DatenschutzPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold font-heading mb-8">
            Datenschutzerklärung
          </h1>

          <div className="prose prose-lg max-w-none">
            <h2>1. Datenschutz auf einen Blick</h2>

            <h3>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was
              mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
              besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können.
            </p>

            <h3>Datenerfassung auf dieser Website</h3>
            <p>
              <strong>
                Wer ist verantwortlich für die Datenerfassung auf dieser Website?
              </strong>
              <br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
              dieser Website entnehmen.
            </p>

            <p>
              <strong>Wie erfassen wir Ihre Daten?</strong>
              <br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in
              ein Kontaktformular eingeben. Andere Daten werden automatisch oder
              nach Ihrer Einwilligung beim Besuch der Website durch unsere
              IT-Systeme erfasst.
            </p>

            <p>
              <strong>Wofür nutzen wir Ihre Daten?</strong>
              <br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
              der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
              Nutzerverhaltens verwendet werden.
            </p>

            <h2>2. Hosting</h2>
            <p>
              Diese Website wird bei einem externen Dienstleister gehostet
              (Hoster). Die personenbezogenen Daten, die auf dieser Website
              erfasst werden, werden auf den Servern des Hosters gespeichert.
            </p>

            <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3>Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3>Hinweis zur verantwortlichen Stelle</h3>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser
              Website ist:
            </p>
            <p>
              {company.name}
              <br />
              {company.address.street}
              <br />
              {company.address.zip} {company.address.city}
              <br />
              <br />
              Telefon: {company.contact.phoneDisplay}
              <br />
              E-Mail: {company.contact.email}
            </p>

            <h2>4. Datenerfassung auf dieser Website</h2>

            <h3>Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
              Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
              nicht ohne Ihre Einwilligung weiter.
            </p>

            <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>
            <p>
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird
              Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen
              Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei
              uns gespeichert und verarbeitet.
            </p>

            <h2>5. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
              gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
              und den Zweck der Datenverarbeitung sowie ein Recht auf
              Berichtigung, Sperrung oder Löschung dieser Daten.
            </p>
            <p>
              Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten
              können Sie sich jederzeit an uns wenden.
            </p>

            <h2>6. Cookies und Einwilligung</h2>
            <p>
              Wir verwenden Cookies auf unserer Website. Dabei unterscheiden wir
              zwischen technisch notwendigen Cookies, die für den Betrieb der
              Website erforderlich sind, sowie optionalen Cookies für Analyse und
              Marketing, die nur mit Ihrer Einwilligung gesetzt werden.
            </p>
            <p>
              Die Einwilligung erfolgt über unseren Cookie-Banner beim ersten
              Besuch. Sie können Ihre Einwilligung jederzeit widerrufen oder
              anpassen:
            </p>
            <p className="my-4">
              <CookieSettingsLink />
            </p>

            <h3>Cookie-Verzeichnis</h3>
            <p>
              Folgende Cookies können auf dieser Website zum Einsatz kommen:
            </p>

            <h4>Technisch notwendige Cookies</h4>
            <p>
              Diese Cookies sind für den Betrieb der Website zwingend erforderlich
              und können nicht deaktiviert werden.
            </p>
            <ul>
              <li>
                <strong>mannhold-cookie-consent</strong> (localStorage)
                <br />
                Zweck: Speichert Ihre Cookie-Einwilligung
                <br />
                Speicherdauer: Unbegrenzt (bis zum Widerruf)
              </li>
            </ul>

            <h4>Analyse-Cookies (nur mit Einwilligung)</h4>
            <p>
              Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer
              Website interagieren.
            </p>
            <ul>
              <li>
                <strong>_ga</strong> (Google Analytics)
                <br />
                Zweck: Unterscheidung von Website-Besuchern
                <br />
                Speicherdauer: 2 Jahre
                <br />
                Anbieter: Google Ireland Limited
              </li>
              <li>
                <strong>_ga_*</strong> (Google Analytics 4)
                <br />
                Zweck: Speicherung des Session-Status
                <br />
                Speicherdauer: 2 Jahre
                <br />
                Anbieter: Google Ireland Limited
              </li>
              <li>
                <strong>_gid</strong> (Google Analytics)
                <br />
                Zweck: Unterscheidung von Website-Besuchern
                <br />
                Speicherdauer: 24 Stunden
                <br />
                Anbieter: Google Ireland Limited
              </li>
            </ul>

            <h4>Marketing-Cookies (nur mit Einwilligung)</h4>
            <p>
              Diese Cookies werden für Werbezwecke und Conversion-Tracking
              eingesetzt.
            </p>
            <ul>
              <li>
                <strong>_fbp</strong> (Facebook Pixel)
                <br />
                Zweck: Tracking von Conversions und Retargeting
                <br />
                Speicherdauer: 3 Monate
                <br />
                Anbieter: Meta Platforms Ireland Limited
              </li>
              <li>
                <strong>_gcl_*</strong> (Google Ads)
                <br />
                Zweck: Conversion-Tracking für Google Ads
                <br />
                Speicherdauer: 90 Tage
                <br />
                Anbieter: Google Ireland Limited
              </li>
            </ul>

            <h2>7. Analyse-Tools und Werbung</h2>
            
            <h3>Google Analytics 4</h3>
            <p>
              Diese Website nutzt Google Analytics 4, einen Webanalysedienst der
              Google Ireland Limited („Google"), Gordon House, Barrow Street,
              Dublin 4, Irland.
            </p>
            <p>
              <strong>Umfang der Verarbeitung:</strong>
              <br />
              Google Analytics verwendet Cookies und ähnliche Technologien, um
              Informationen über die Nutzung dieser Website zu sammeln. Die
              erfassten Informationen (einschließlich Ihrer IP-Adresse) werden in
              der Regel an einen Server von Google übertragen und dort
              gespeichert.
            </p>
            <p>
              <strong>Zweck der Verarbeitung:</strong>
              <br />
              Wir nutzen Google Analytics, um die Nutzung unserer Website zu
              analysieren und regelmäßig zu verbessern. Über die gewonnenen
              Statistiken können wir unser Angebot optimieren und für Sie als
              Nutzer interessanter gestalten.
            </p>
            <p>
              <strong>Rechtsgrundlage:</strong>
              <br />
              Die Nutzung von Google Analytics erfolgt auf Grundlage Ihrer
              Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
              TTDSG. Sie können Ihre Einwilligung jederzeit widerrufen.
            </p>
            <p>
              <strong>Datenübermittlung in Drittländer:</strong>
              <br />
              Google verarbeitet Ihre Daten ggf. auch in den USA. Google ist nach
              dem EU-US Data Privacy Framework zertifiziert. Weitere Informationen
              finden Sie in der{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0089CF] hover:underline"
              >
                Datenschutzerklärung von Google
              </a>
              .
            </p>

            <h3>Google Ads Conversion-Tracking</h3>
            <p>
              Nach Ihrer Einwilligung nutzen wir Google Ads Conversion-Tracking,
              um die Effektivität unserer Werbemaßnahmen zu messen. Die
              Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6
              Abs. 1 lit. a DSGVO.
            </p>

            <h3>Facebook Pixel</h3>
            <p>
              Nach Ihrer Einwilligung nutzen wir das Facebook Pixel der Meta
              Platforms Ireland Limited für Werbezwecke und Retargeting. Die
              Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6
              Abs. 1 lit. a DSGVO.
            </p>
            <p>
              Weitere Informationen finden Sie in der{" "}
              <a
                href="https://www.facebook.com/privacy/explanation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0089CF] hover:underline"
              >
                Datenschutzerklärung von Meta
              </a>
              .
            </p>

            <h2>8. SSL- bzw. TLS-Verschlüsselung</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.
              Eine verschlüsselte Verbindung erkennen Sie daran, dass die
              Adresszeile des Browsers von „http://" auf „https://" wechselt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
