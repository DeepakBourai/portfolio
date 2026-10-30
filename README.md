# Editorial Engineering Portfolio

A high-performance, dark-editorial engineering portfolio modeled directly after [ankit-portfolio-data-ten.vercel.app](https://ankit-portfolio-data-ten.vercel.app/).

Designed with an aesthetic blend of modern typography, technical schematics, and interactive systems visualization.

---

## ⚡ Quick Start / Preview

You can preview the website immediately in two ways:

### Option 1: Direct File Open (Zero Setup)
Double-click [`index.html`](file:///c:/Users/work/Downloads/portfolio/index.html) in Windows File Explorer or open it in any modern browser (Chrome, Edge, Firefox, Brave).

### Option 2: Python Local Server
Run the included preview server:
```powershell
python serve.py
```
Then visit **`http://localhost:3000`** in your browser.

---

## 🎨 Architectural & Design Highlights

Mirrored from the reference site:

1. **Editorial Typography System**
   - **Serif Accent**: *Instrument Serif* italic headers for high-end editorial contrast.
   - **Modern Sans**: *Bricolage Grotesque* for clean, legible body text and headings.
   - **Technical Monospace**: *JetBrains Mono* for system kickers, layer badges (`L1`, `L2`), metrics, and payloads.

2. **Design Palette & Texture**
   - Deep Carbon Background: `#0b0c0a` (`--color-ink`)
   - Dark Slate Surface: `#121410` (`--color-ink-2`)
   - Warm Paper Typography: `#f1ede3` (`--color-paper`)
   - Signature Neon Lime Accent: `#c8ff2e` (`--color-lime`)
   - Fine Hairline Grid Lines: `rgba(241, 237, 227, 0.09)`
   - Subtle procedural background grain overlay.

3. **Core Interactive Sections**
   - **Hero (`#top`)**: Hybrid serif/sans headline, live availability indicator with pulsing green beacon, and quick CTAs.
   - **Profile (`#profile`)**: Engineering philosophy, background summary, quick facts grid, and production metric callouts.
   - **Full-Stack Toolkit (`#toolkit`)**: Interactive 5-layer architectural stack (`L1 Client`, `L2 Real-time`, `L3 API & Server`, `L4 Data`, `L5 Ship`). Hovering or tapping any skill pill updates the live inspector panel with its concrete production use case and projects where it was applied.
   - **Digital Workshop (`#workshop`)**: Interactive request tracer simulation! Lets visitors choose a real-world workflow (*Sign in with RBAC*, *Start a WebRTC consultation*, *Multi-provider API aggregation*) and step/play through hops with payload previews and node highlighting.
   - **Selected Work (`#work`)**: Case studies with abstract architectural schematics, key highlights, challenges & solutions, plus interactive full-detail modal drawer and "More builds" directory.
   - **Experience & Education (`#experience`)**: Career timeline with active status badges, impact bullet points, stack tags, education credentials, and certifications.
   - **Engineering Principles (`#approach`)**: High-contrast paper cards detailing technical philosophies (*Schema first*, *APIs that fail politely*, *Performance is a feature*).
   - **Contact (`#contact`)**: One-click email copy button with toast notification, phone link, and direct social links.

---

## 📁 File Structure

```
c:\Users\work\Downloads\portfolio\
├── index.html               # Main website markup & semantic sections
├── css\
│   └── styles.css           # Design tokens, variables, typography, animations
├── js\
│   └── app.js               # Reactive UI engine, workshop tracer, modals, observer
├── data\
│   └── portfolio-data.js    # Single source of truth for all content & details
├── serve.py                 # 1-click local Python preview server
└── README.md                # Project documentation
```

---

## 📄 Uploading Your Resume

The entire website is dynamically driven by [`data/portfolio-data.js`](file:///c:/Users/work/Downloads/portfolio/data/portfolio-data.js).

Once you upload your resume (PDF, Word, or text format), the following fields will be mapped automatically:
- Your real Name, Title, and Bio
- Your Contact info, Email, Phone, and Social Profiles
- Your Technical Skills mapped across L1–L5 layers
- Your Real Projects, Case Studies, and Architecture highlights
- Your Actual Work Experience, Companies, Dates, and Achievements
- Your Education and Certifications
