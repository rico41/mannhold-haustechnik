# Mannhold Haustechnik Website

Professionelle Website für Mannhold Haustechnik GmbH – Wärmepumpen & Heizungstechnik in Berlin und Potsdam.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Fonts:** Plus Jakarta Sans (Headings), Inter (Body)
- **Language:** TypeScript

## 📁 Projektstruktur

```
src/
├── app/                    # Next.js App Router Pages
│   ├── api/contact/        # Kontaktformular API
│   ├── leistungen/         # Service-Seiten
│   ├── standorte/          # Bezirks-Landingpages (Programmatic SEO)
│   ├── ratgeber/           # Blog/Ratgeber
│   └── ...
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Page Sections (Hero, Services, etc.)
│   ├── forms/              # Kontaktformular
│   └── ui/                 # shadcn Components
└── lib/
    └── data/               # Statische Daten (Services, Locations, etc.)
```

## 🎨 Markenfarben

| Farbe | Hex |
|-------|-----|
| Primary (Orange) | `#F7941D` |
| Secondary (Blau) | `#0089CF` |
| Dark (Anthrazit) | `#4D4D4D` |
| Light Gray | `#F5F5F5` |

## 📍 Programmatic SEO

Die Website enthält automatisch generierte Landingpages für jeden Bezirk:

- Berlin-Schöneberg
- Berlin-Steglitz
- Berlin-Zehlendorf
- Berlin-Tempelhof
- Berlin-Friedenau
- Berlin-Wilmersdorf
- Potsdam

Jede Seite ist für lokale Keywords optimiert mit:
- Einzigartige Meta-Descriptions
- LocalBusiness Schema Markup
- Bezirksspezifische Inhalte

## 🛠️ Development

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Production Build
npm run build

# Production Server
npm start
```

## 📧 Kontaktformular

Das Kontaktformular sendet Anfragen an die API-Route `/api/contact`. 

**Für Produktion:** Die E-Mail-Versendung muss noch implementiert werden (z.B. mit Nodemailer, SendGrid, etc.).

## 🔍 SEO Features

- ✅ Dynamische Meta-Tags pro Seite
- ✅ Open Graph Tags
- ✅ JSON-LD Schema Markup (LocalBusiness, FAQ)
- ✅ Automatisch generierte Sitemap
- ✅ robots.txt
- ✅ Canonical URLs

## 📱 Responsive Design

Die Website ist vollständig responsive und optimiert für:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🚀 Deployment

Empfohlen: **Vercel**

```bash
# Mit Vercel CLI
vercel

# Oder über GitHub Integration
```

## 📝 Anpassungen

### Kontaktdaten ändern
Bearbeite `src/lib/data/company.ts`

### Services ändern
Bearbeite `src/lib/data/services.ts`

### Standorte/Bezirke ändern
Bearbeite `src/lib/data/locations.ts`

### FAQ ändern
Bearbeite `src/lib/data/faq.ts`

---

Entwickelt für **Mannhold Haustechnik GmbH** | Berlin-Schöneberg
