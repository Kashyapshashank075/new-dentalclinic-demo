# 🦷 iDentist Dental Clinic — React Website

**Location:** Sevoke Road, Siliguri, West Bengal  
**Design:** Dark navy + Electric blue + Gold — modern, premium feel  
**Stack:** React 18, React Router v6, CSS Modules per component

---

## 📁 Project Structure

```
identist/
├── public/
│   └── index.html                    # HTML entry (Google Fonts: Syne + Nunito)
├── src/
│   ├── App.js                        # Router + ScrollToTop + layout shell
│   ├── index.js                      # React DOM entry
│   │
│   ├── styles/
│   │   └── global.css                # Design tokens, resets, utilities, animations
│   │
│   ├── data/
│   │   └── siteData.js               # ← ALL content lives here (edit this file!)
│   │
│   ├── assets/
│   │   └── images/                   # ← Drop real images here
│   │       ├── clinic-hero.jpg
│   │       ├── clinic-building.jpg
│   │       ├── dr-sanjana-roy.jpg
│   │       ├── dr-arindham-ghosh.jpg
│   │       ├── dr-priti-sharma.jpg
│   │       ├── dr-rahul-basu.jpg
│   │       ├── clinic-reception.jpg
│   │       ├── treatment-room-1.jpg
│   │       ├── xray-suite.jpg
│   │       ├── sterilisation-room.jpg
│   │       ├── treatment-room-2.jpg
│   │       └── childrens-corner.jpg
│   │
│   ├── components/                   # Reusable UI components
│   │   ├── Navbar/                   # Sticky navbar + mobile drawer
│   │   ├── Footer/                   # CTA strip + 4-col footer
│   │   ├── Hero/                     # Landing hero with floating badges
│   │   ├── Stats/                    # Animated stats bar
│   │   ├── Services/                 # 8-service grid with hover effects
│   │   ├── WhyUs/                    # Reasons + accreditation badges
│   │   ├── AppointmentForm/          # Full booking form + working hours
│   │   ├── Reviews/                  # Patient testimonials + platform ratings
│   │   └── Gallery/                  # Clinic photo gallery with lightbox
│   │
│   └── pages/
│       ├── Home/Home.jsx             # Home page (all sections)
│       ├── About/About.jsx + .css    # Mission, timeline, team, booking
│       └── Contact/Contact.jsx + .css # Info, map slot, message form, FAQ
│
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16 or newer

### Install & Run

```bash
cd identist
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

---

## 🖼️ Adding Real Images

### Step 1 — Place images in `src/assets/images/`

### Step 2 — Update `src/data/siteData.js`

**Gallery images:**
```js
export const galleryImages = [
  { id: 1, label: "Reception & Waiting Area", src: "/assets/images/clinic-reception.jpg" },
  { id: 2, label: "Treatment Room 1",          src: "/assets/images/treatment-room-1.jpg" },
  // ...
];
```

**Doctor photos:**
```js
export const team = [
  {
    name: "Dr. Sanjana Roy",
    imageSrc: "/assets/images/dr-sanjana-roy.jpg",  // ← set this
    // ...
  },
  // ...
];
```

**Hero image** — in `src/components/Hero/Hero.jsx`, find the comment and replace:
```jsx
{/* Replace placeholder with: */}
<img src="/assets/images/clinic-hero.jpg" alt="iDentist Clinic" />
```

**Google Maps embed** — in `src/pages/Contact/Contact.jsx`, find the `<iframe>` comment and paste your embed code from Google Maps → Share → Embed a map.

---

## ✏️ Customising Content

All clinic info, services, team, reviews, hours and gallery data lives in one file:

```
src/data/siteData.js
```

Edit `CLINIC`, `services`, `team`, `reviews`, `workingHours`, `faqs`, and `galleryImages` there.

---

## 🎨 Design System

Tokens in `src/styles/global.css`:

| Token          | Value       | Use              |
|----------------|-------------|------------------|
| `--navy`       | `#0d1b2a`   | Page background  |
| `--blue`       | `#2196f3`   | Primary actions  |
| `--gold`       | `#f5b800`   | Accents / CTA    |
| `--font-display`| Syne      | Headings         |
| `--font-body`  | Nunito      | Body text        |

---

## 📄 Pages

| Route      | Description                                            |
|------------|--------------------------------------------------------|
| `/`        | Hero, Stats, Services, Why Us, Gallery, Appointment, Reviews |
| `/about`   | About hero, Mission, Timeline, Team, Appointment       |
| `/contact` | Contact details, Map, Message form, FAQ accordion      |

---

## ✅ Features Checklist

- [x] Fully responsive (mobile, tablet, desktop)
- [x] Dark navy + blue + gold premium design
- [x] Sticky navbar with mobile hamburger drawer
- [x] Animated hero with floating info badges
- [x] 8-service grid with hover animations
- [x] Photo gallery with lightbox (click to zoom)
- [x] **Image placeholder slots** — swap with real photos easily
- [x] Appointment form with validation + success state
- [x] Working hours panel
- [x] Doctor team cards with photo slots
- [x] Patient reviews with star ratings
- [x] 15-year milestone timeline (About page)
- [x] FAQ accordion (Contact page)
- [x] Google Maps embed slot (Contact page)
- [x] All content centralised in `siteData.js`
