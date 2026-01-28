import type { Metadata } from "next";
import { company } from "@/lib/data";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen (AGB)",
  description: "Allgemeine Geschäftsbedingungen der Mannhold Haustechnik GmbH",
};

export default function AGBPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold font-heading mb-4">
              Allgemeine Geschäftsbedingungen
            </h1>
            <p className="text-muted-foreground">
              {company.name}
              <br />
              <span className="text-sm">(Stand: Januar 2026)</span>
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* I. Allgemeines */}
            <div>
              <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">
                I. Allgemeines
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Maßgebliche Vertragsgrundlage für den vom Unternehmer auszuführenden
                Auftrag des Verbrauchers sind vorrangig individuelle Vereinbarungen
                sowie nachrangig die nachstehenden Allgemeinen Geschäftsbedingungen.
                Andere Geschäftsbedingungen werden nicht anerkannt, auch wenn ihnen
                nicht ausdrücklich widersprochen wird.
              </p>
            </div>

            <Separator />

            {/* II. Angebote und Unterlagen */}
            <div>
              <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">
                II. Angebote und Unterlagen
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Angebote, Kalkulationen, Pläne, Zeichnungen, Berechnungen,
                Kostenanschläge oder andere Unterlagen des Unternehmers dürfen ohne
                dessen Zustimmung weder vervielfältigt, verändert noch Dritten
                zugänglich gemacht werden. Bei Nichterteilung des Auftrags hat der
                Verbraucher die Unterlagen einschließlich Kopien auf Verlangen des
                Unternehmers unverzüglich herauszugeben. Bei von ihm verschuldeter
                Unmöglichkeit der Herausgabe haftet der Verbraucher auf Schadensersatz.
              </p>
            </div>

            <Separator />

            {/* III. Vergütung, Preise und Zahlungsbedingungen */}
            <div>
              <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">
                III. Vergütung, Preise und Zahlungsbedingungen
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Abrechnung nach Aufwand:
                  </h3>
                  <p>
                    Soweit nicht ausdrücklich ein Festpreis schriftlich vereinbart
                    wurde, erfolgt die Abrechnung auf Basis des tatsächlichen Aufwands
                    (Regiearbeit). Die Vergütung setzt sich zusammen aus:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>
                      Der Arbeitszeit (Abrechnung erfolgt im 15-Minuten-Takt, wobei die
                      erste Stunde voll berechnet wird),
                    </li>
                    <li>
                      Den Service- und Logistikpauschalen (Anfahrt/Rüstzeit),
                    </li>
                    <li>
                      Den Pauschalen für Werkzeugeinsatz, Messgeräte und Kleinmaterial,
                    </li>
                    <li>Dem verbrauchten Material.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Preisliste:</h3>
                  <p>
                    Es gelten die zum Zeitpunkt der Auftragserteilung aktuellen
                    Verrechnungssätze und Pauschalen des Unternehmers. Diese können
                    jederzeit in den Geschäftsräumen eingesehen oder angefordert werden.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Notdienst:</h3>
                  <p>
                    Für Leistungen außerhalb der regulären Geschäftszeiten (Mo-Fr
                    7:00–17:00 Uhr) werden Zuschläge sowie eine einmalige
                    Notdienst-Bereitstellungspauschale berechnet. Die Höhe der Zuschläge
                    wird dem Verbraucher vor Auftragserteilung (z.B. telefonisch oder auf
                    dem Auftragsformular) mitgeteilt.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Preise:</h3>
                  <p>
                    Alle genannten Preise verstehen sich netto zuzüglich der jeweils
                    gültigen gesetzlichen Mehrwertsteuer.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Material:</h3>
                  <p>
                    Die Abrechnung von Material erfolgt nach Listenpreisen des
                    Unternehmers.
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            {/* IV. Zahlungsbedingungen und Verzug */}
            <div>
              <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">
                IV. Zahlungsbedingungen und Verzug
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nach Abnahme des Werkes sind Rechnungen sofort fällig und zahlbar (§
                650g Abs. 4 BGB bleibt unberührt). Alle Zahlungen sind ohne Abzug
                spätestens binnen 7 Tagen nach Rechnungserhalt an den Unternehmer zu
                leisten. Nach Ablauf dieser Frist befindet sich der Verbraucher in
                Verzug, sofern er die Nichtzahlung zu vertreten hat.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Der Verbraucher kann nur mit unbestrittenen oder rechtskräftig
                festgestellten Gegenforderungen aufrechnen.
              </p>
            </div>

            <Separator />

            {/* V. Bauliche Voraussetzungen und Mitwirkungspflichten */}
            <div>
              <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">
                V. Bauliche Voraussetzungen und Mitwirkungspflichten des Verbrauchers
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Der Verbraucher ist dafür verantwortlich, dass alle baulichen,
                technischen und rechtlichen Voraussetzungen für die Ausführung der
                Arbeiten erfüllt sind. Insbesondere hat er dafür Sorge zu tragen, dass
                sämtliche benötigten Räume, Leitungen, Anschlüsse und Installationsbereiche
                frei zugänglich, von Hindernissen befreit und ausreichend beleuchtet
                sind.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Der Verbraucher stellt sicher, dass erforderliche behördliche
                Genehmigungen, Zustimmungen Dritter oder sonstige Erlaubnisse vor Beginn
                der Arbeiten vorliegen.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Verzögerungen oder zusätzliche Kosten, die dadurch entstehen, dass die
                oben genannten Voraussetzungen nicht oder nicht rechtzeitig erfüllt
                werden und die der Verbraucher zu vertreten hat, gehen zu seinen Lasten.
              </p>
            </div>

            <Separator />

            {/* VI. Abnahme bei Werkvertrag */}
            <div>
              <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">
                VI. Abnahme bei Werkvertrag
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Die vereinbarte Werkleistung ist nach Fertigstellung abzunehmen, auch
                wenn die Feinjustierung der Anlage noch nicht erfolgt ist. Dies gilt
                insbesondere bei vorzeitiger Inbetriebnahme (Baustellenheizung).
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Verweigert der Verbraucher die Abnahme ohne berechtigten Grund, gilt die
                Leistung nach Ablauf von 14 Tagen ab Anzeige der Fertigstellung als
                abgenommen.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Im Übrigen gilt § 640 BGB.
              </p>
            </div>

            <Separator />

            {/* VII. Haftung auf Schadensersatz */}
            <div>
              <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">
                VII. Haftung auf Schadensersatz
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Der Unternehmer haftet auf Schadensersatz – gleich aus welchem
                Rechtsgrund – im Rahmen der Verschuldenshaftung nur
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>
                  bei vorsätzlicher oder grob fahrlässiger Pflichtverletzung durch ihn
                  selbst, seinen gesetzlichen Vertreter oder seinen Erfüllungsgehilfen
                  sowie bei fahrlässiger Verletzung von Leben, Körper oder Gesundheit;
                </li>
                <li>bei arglistigem Verschweigen von Mängeln;</li>
                <li>
                  im Falle der Übernahme einer Garantie für die Beschaffenheit des
                  Werkes;
                </li>
                <li>nach den Vorschriften des Produkthaftungsgesetzes;</li>
                <li>
                  für Schäden aus der nicht unerheblichen Verletzung wesentlicher
                  Vertragspflichten (Kardinalpflichten). Bei einfacher Fahrlässigkeit ist
                  die Haftung auf den vorhersehbaren, typischerweise eintretenden Schaden
                  begrenzt, soweit nicht wegen Verletzung von Leben, Körper oder
                  Gesundheit gehaftet wird.
                </li>
              </ul>
            </div>

            <Separator />

            {/* VIII. Mängelrechte – Verjährung */}
            <div>
              <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">
                VIII. Mängelrechte – Verjährung
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Aussagen des Herstellers in Produktunterlagen oder Werbung stellen keine
                vereinbarte Beschaffenheit des Werkes dar.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Mängelansprüche des Verbrauchers verjähren gemäß § 634a Abs.1 Nr.2 BGB
                in fünf Jahren ab Abnahme bei Arbeiten an einem Bauwerk.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Bei Reparatur-, Ausbesserungs-, Instandhaltungs-, Einbau-, Erneuerungs-
                oder Umbauarbeiten an einem bereits errichteten Bauwerk, die keine
                wesentliche Bedeutung für Konstruktion, Bestand, Erhaltung oder
                Benutzbarkeit des Gebäudes haben, verjähren Mängelansprüche in einem Jahr
                ab Abnahme.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Von der Mängelbeseitigungspflicht sind Mängel ausgeschlossen, die nach
                Abnahme durch fehlerhafte Bedienung, gewaltsame Einwirkung des
                Verbrauchers oder Dritter oder durch normalen, bestimmungsgemäßen
                Verschleiß entstanden sind.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Kommt der Unternehmer einer Aufforderung des Verbrauchers zur
                Mängelbeseitigung nach und liegt objektiv kein vom Unternehmer zu
                vertretender Mangel vor, hat der Verbraucher – sofern er dies schuldhaft
                veranlasst hat – die entstandenen Aufwendungen des Unternehmers zu
                ersetzen.
              </p>
            </div>

            <Separator />

            {/* IX. Versuchte Instandsetzung */}
            <div>
              <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">
                IX. Versuchte Instandsetzung
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Kann ein beauftragtes Objekt (Reparaturauftrag) trotz Einhaltung der
                allgemein anerkannten Regeln der Technik nicht instandgesetzt werden,
                weil der Verbraucher den Zugang zum Objekt zum vereinbarten Zeitpunkt
                schuldhaft nicht gewährt oder weil der Fehler/Mangel nach Rücksprache mit
                dem Verbraucher nicht wirtschaftlich sinnvoll beseitigt werden kann, ist
                der Verbraucher verpflichtet, die entstandenen Aufwendungen des
                Unternehmers zu tragen, sofern die Undurchführbarkeit nicht in den
                Verantwortungsbereich des Unternehmers fällt.
              </p>
            </div>

            <Separator />

            {/* X. Eigentumsvorbehalt */}
            <div>
              <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">
                X. Eigentumsvorbehalt
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Soweit kein Eigentumsverlust gemäß §§ 946 ff. BGB vorliegt, behält sich
                der Unternehmer das Eigentum und Verfügungsrecht an den Liefergegenständen
                bis zum Eingang sämtlicher Zahlungen aus dem Vertrag vor.
              </p>
            </div>

            <Separator />

            {/* XI. Terminvereinbarungen und -verschiebungen */}
            <div>
              <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">
                XI. Terminvereinbarungen und -verschiebungen
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Vereinbarte Termine sind vom Verbraucher einzuhalten.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Sollte der Verbraucher einen Termin nicht wahrnehmen können, muss dieser
                mindestens 24 Stunden im Voraus abgesagt werden.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Erfolgt keine Absage oder ist der Termin aus Gründen, die der Verbraucher
                zu vertreten hat, nicht wahrnehmbar, kann der Unternehmer eine angemessene
                Aufwandspauschale in Rechnung stellen.
              </p>
            </div>

            <Separator />

            {/* XII. Höhere Gewalt */}
            <div>
              <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">
                XII. Höhere Gewalt
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Der Unternehmer haftet nicht für Verzögerungen oder Nichterfüllung von
                Leistungen, die auf Ereignisse höherer Gewalt zurückzuführen sind (z. B.
                Naturkatastrophen, Streiks, Epidemien, behördliche Anordnungen).
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                In solchen Fällen verlängern sich vereinbarte Fristen um die Dauer der
                Behinderung zuzüglich einer angemessenen Anlaufzeit.
              </p>
            </div>

            <Separator />

            {/* XIII. Datenschutz */}
            <div>
              <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">
                XIII. Datenschutz
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Im Rahmen der Auftragserfüllung werden personenbezogene Daten des
                Verbrauchers erhoben, verarbeitet und gespeichert, ausschließlich zur
                Vertragserfüllung und unter Beachtung der geltenden Datenschutzbestimmungen.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Eine Weitergabe der Daten an Dritte erfolgt nur, soweit dies für die
                Vertragserfüllung notwendig ist oder der Verbraucher ausdrücklich
                zugestimmt hat.
              </p>
            </div>

            <Separator />

            {/* XIV. Widerrufsrecht für Verbraucher */}
            <div>
              <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">
                XIV. Widerrufsrecht für Verbraucher
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Sofern der Vertrag außerhalb von Geschäftsräumen oder über
                Fernkommunikationsmittel geschlossen wird, steht dem Verbraucher das
                gesetzliche Widerrufsrecht nach Maßgabe der §§ 312g, 355 BGB zu.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Der Verbraucher wird über sein Widerrufsrecht gesondert belehrt.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Hat der Verbraucher verlangt, dass die Dienstleistung während der
                Widerrufsfrist beginnt, so hat er im Falle eines Widerrufs den anteiligen
                Wert der bis dahin erbrachten Leistung zu zahlen.
              </p>
            </div>

            <Separator />

            {/* XV. Verweise auf geltendes Recht */}
            <div>
              <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">
                XV. Verweise auf geltendes Recht
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Soweit diese AGB keine abweichenden Regelungen treffen, gelten die
                einschlägigen gesetzlichen Vorschriften des Bürgerlichen Gesetzbuches
                (BGB) sowie weitere branchenspezifische Regelungen, insbesondere des
                Gebäudeenergiegesetzes (GEG) und sonstige relevante Normen, in ihrer
                jeweils gültigen Fassung.
              </p>
            </div>

            <Separator />

            {/* XVI. Umgang mit Altmaterialien */}
            <div>
              <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">
                XVI. Umgang mit Altmaterialien
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Werden im Rahmen von Reparatur-, Austausch- oder Installationsarbeiten
                Altmaterialien, Bauteile oder Geräte ausgebaut, gehen diese – sofern nichts
                anderes schriftlich vereinbart ist – in das Eigentum des Unternehmers über.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Der Unternehmer kann diese Altmaterialien entsorgen oder verwerten.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Wünscht der Verbraucher die Herausgabe des Altmaterials, hat er dies im
                Voraus mitzuteilen. In diesem Fall ist er für die sachgerechte Entsorgung
                selbst verantwortlich. Eine etwaige Vergütung oder Kostenbeteiligung für
                den Verbleib von Altmaterialien beim Unternehmer kann gesondert vereinbart
                werden.
              </p>
            </div>

            <Separator />

            {/* XVII. Ausführung nach den ATV */}
            <div>
              <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">
                XVII. Ausführung nach den Allgemeinen Technischen Vertragsbedingungen
                (ATV)
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Die Arbeiten werden nach den Allgemeinen Technischen Vertragsbedingungen
                (ATV) der VOB/C ausgeführt. Die ATV legen anerkannte technische Standards
                fest, an denen sich der Unternehmer orientiert, um ein einheitliches,
                überprüfbares Qualitätsniveau der Leistungen sicherzustellen.
              </p>
            </div>

            <Separator />

            {/* XVIII. Schlussbestimmungen */}
            <div>
              <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">
                XVIII. Schlussbestimmungen
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar
                sein oder werden, so bleibt die Wirksamkeit der übrigen Bestimmungen davon
                unberührt. An die Stelle der unwirksamen Bestimmung tritt eine wirksame
                Regelung, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am
                nächsten kommt.
              </p>
            </div>

            <Separator />

            {/* XIX. Alternative Streitbeilegung */}
            <div>
              <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">
                XIX. Alternative Streitbeilegung
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Der Unternehmer ist weder bereit noch verpflichtet, an
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teilzunehmen.
              </p>
            </div>

            <Separator />

            {/* XXI. Fotoaufnahmen */}
            <div>
              <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">
                XXI. Fotoaufnahmen zu Dokumentations- und Werbezwecken
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Der Unternehmer ist berechtigt, vor, während und nach Abschluss der
                Arbeiten Fotoaufnahmen des betroffenen Arbeitsbereichs sowie der
                eingebauten oder reparierten Anlagen anzufertigen, soweit dies für
                Dokumentations-, Nachweis-, Qualitätssicherungs- oder Werbezwecke
                erforderlich ist.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Die Anfertigung und Nutzung der Fotos erfolgt unter der Maßgabe, dass
                keine personenbeziehbaren Daten oder eindeutig identifizierbaren Personen
                abgebildet werden. Sofern Personen oder persönliche Gegenstände
                unvermeidbar im Bildausschnitt erscheinen, werden diese entsprechend
                unkenntlich gemacht.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Der Unternehmer ist berechtigt, die aufgenommenen Fotos ohne weitere
                Zustimmung des Verbrauchers zu eigenen Werbezwecken in Printmedien, auf
                seiner Website sowie in Social-Media-Kanälen (z. B. Instagram) zu
                veröffentlichen oder zu präsentieren.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Sollte der Verbraucher im Einzelfall der Veröffentlichung bestimmter Fotos
                widersprechen wollen, hat er dies dem Unternehmer schriftlich mitzuteilen.
                Der Unternehmer wird die betroffenen Fotos nach Möglichkeit nicht mehr
                veröffentlichen bzw. unverzüglich entfernen, sofern dies technisch und
                rechtlich umsetzbar ist.
              </p>
            </div>
          </div>

          {/* Kontakt-Info am Ende */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2">Kontakt</h3>
            <p className="text-sm text-muted-foreground">
              {company.name}
              <br />
              {company.address.street}
              <br />
              {company.address.zip} {company.address.city}
              <br />
              Telefon: {company.contact.phoneDisplay}
              <br />
              E-Mail: {company.contact.email}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
