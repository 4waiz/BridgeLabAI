# BridgeLab AI

**Arabic-English GenAI Lab Troubleshooting Coach for STEM Education.**

BridgeLab AI is a polished, demo-ready prototype that helps STEM students fix electronics, sensor, and robotics setups. A student uploads a photo or short clip of their build; the app detects likely mistakes, explains the issue in Arabic or English, and provides hint-first guidance instead of dumping the full solution. Teachers get a class-level dashboard of common errors, learning gaps, and recommended 5-minute mini-demos.

This repo contains the full local prototype used for a 3-minute competition submission video.

---

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** + custom shadcn/ui-style primitives (Button, Card, Badge, Progress, Dialog)
- **Framer Motion** for light entrance and step animations
- **Recharts** for the teacher dashboard
- **Lucide** icons
- **html-to-image** for the downloadable summary card
- **No backend, no auth, no paid APIs.** All analysis is deterministic mock logic that runs in the browser.

---

## Run it locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

Builds:

```bash
npm run build
npm start
```

---

## Logo

The brand logo lives at [`public/logo.png`](public/logo.png). It is referenced from:

- the navbar (every page)
- the landing-page hero card
- the analysis loading state (gently pulsing)
- the downloadable share card on the result page
- the page favicon (set in `app/layout.tsx`)

To replace the logo, drop a new `logo.png` into `public/` — no other change required.

---

## Routes

| Route | What it is |
|---|---|
| `/` | Landing — hero, problem, features, pipeline teaser, Responsible AI card |
| `/student` | Upload + Analyze flow with animated 5-step pipeline and structured result panel |
| `/teacher` | KPI cards, four Recharts charts, recent analyses, learning gaps, intervention recommendations |
| `/how-it-works` | Full pipeline view + Responsible AI section |

---

## Component structure

```
app/
  layout.tsx               # Root layout, I18nProvider, navbar/footer
  page.tsx                 # Landing
  student/page.tsx         # Student lab coach
  teacher/page.tsx         # Teacher dashboard
  how-it-works/page.tsx    # Pipeline + Responsible AI
  globals.css              # Tailwind + custom utilities

components/
  i18n/I18nProvider.tsx    # EN/AR context, persists in localStorage, sets <html dir>
  layout/                  # Navbar, Footer, Logo, LanguageSwitcher
  landing/                 # Hero, Problem, Features, HowItWorksTeaser, ResponsibleAI
  student/                 # Uploader, SampleChips, AnalysisSteps, OverlayMarkers, ResultPanel, ShareCard, StatusBadge
  teacher/                 # KpiCards, ChartCard, Charts, RecentTable, LearningGaps, Interventions
  ui/                      # Button, Card, Badge, Progress, Dialog primitives

lib/
  analyze.ts               # Deterministic 5-step analysis pipeline
  history.ts               # localStorage-backed history with seed data
  aggregate.ts             # KPI / chart / intervention helpers
  cn.ts                    # Tailwind class merge

data/
  scenarios.ts             # 5 demo scenarios with full bilingual copy
  i18n.ts                  # EN + AR dictionaries
  seedHistory.ts           # Seeded class history so the dashboard is alive on first load

types/index.ts             # Lang, Scenario, AnalysisResult, HistoryEntry, etc.

public/
  logo.png                 # Brand logo
  samples/                 # SVG illustrations for each demo scenario
```

---

## Demo scenarios

Five deterministic scenarios power the demo. Each ships with a full structured payload (`issueTitle`, `confidence`, `explanation`, `hint`, `safetyNote`, `followUpQuestion`, `suggestedNextAction`, `teacherCategory`, `affectedConcept`) in **both English and Arabic**.

| ID | Trigger | Status |
|---|---|---|
| `arduino-ground-error` | Faulty Arduino circuit chip, or filename containing `ground`/`arduino` | Needs attention |
| `reversed-led` | Reversed LED chip, or filename containing `led` + `rev` | Safe to retry |
| `missing-resistor` | Missing resistor chip, or filename containing `resistor` | Needs attention |
| `wrong-sensor-pin` | Wrong sensor wiring chip, or filename containing `sensor`/`dht` | Teacher review |
| `robot-motor-misconnection` | Robotics chip, or filename containing `motor`/`robot` | Needs attention |

Any other filename hashes deterministically to one of the five so re-uploading the same file always returns the same analysis. To plug in a real CV/LLM later, replace the body of `runAnalysis` in [`lib/analyze.ts`](lib/analyze.ts) — the rest of the app already speaks the same `Scenario` shape.

---

## Bilingual + RTL

Every visible string runs through the `t()` helper from `components/i18n/I18nProvider.tsx`. Selecting Arabic from the navbar switches the dictionary, sets `<html lang="ar" dir="rtl">`, and Tailwind's logical properties handle the layout flip. Language preference is persisted in localStorage.

---

## Architecture summary

```
[Photo or clip]
      │
      ▼
[Component detection]   ← swap in real CV here
      │
      ▼
[Rule-guided diagnosis] ← swap in real inference here
      │
      ▼
[GenAI explanation]     ← swap in Anthropic/OpenAI/etc here
      │
      ▼
[Hint-first response]   ← shape: hint + follow-up question
      │
      ▼
[Anonymous aggregation] → teacher dashboard
```

Every stage is small, named, and replaceable. The mock implementation is in `lib/analyze.ts` and the bilingual copy lives in `data/scenarios.ts`.

---

## Responsible AI

BridgeLab AI ships with a visible Responsible AI section on the landing page and the How-it-works page, covering:

- Hint-first, not answer-dumping
- Teacher remains in control (aggregated insights, not student-by-student surveillance)
- Minimal student data (no auth, no PII, history stays local)
- Designed for safer lab sessions (safety-relevant issues are surfaced first)

---

## License

Prototype build for competition submission. Not for production use.
