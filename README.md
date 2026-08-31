# TOU MCCB Test Sheet
## Manor Switchgear & Controls Ltd

Digital Tap-Off Unit MCCB Test Sheet — works fully offline as a Progressive Web App.

---

## Files Required

```
📁 Repository
├── index.html       — Main application
├── manifest.json    — PWA manifest
├── sw.js            — Service worker (offline support)
├── icon1.png        — App icon 192x192px
├── icon2.png        — App icon 512x512px
└── README.md
```

---

## GitHub Pages Setup

1. Upload all files to your GitHub repository
2. Go to **Settings → Pages**
3. Set source to **Deploy from branch → main → / (root)**
4. Wait ~1 minute then visit your Pages URL

---

## Installing on Devices

**Desktop (Chrome / Edge)**
1. Visit your GitHub Pages URL
2. Click the install icon in the address bar
3. Click Install — app appears in Start Menu / Dock

**iPhone / iPad**
1. Visit your GitHub Pages URL in Safari
2. Tap Share → Add to Home Screen
3. Tap Add

**Android**
1. Visit your GitHub Pages URL in Chrome
2. Tap the install banner or menu → Add to Home Screen

---

## Sections

| Tab | Section | Description |
|-----|---------|-------------|
| Installation | 1 | MCCB installation checks |
| Torque | 2 | Torque verification |
| Labelling | 3 | Labelling & completion checks |
| Insulation | 4 | IR test at 1000V DC |
| Dielectric | 5 | Dielectric test at 2000V AC |
| Primary Injection | 6 | Primary injection test |
| Final Verification | 7 | Final checks |
| Sign-Off | 8 | Signature, name, date, notes |
| Photos | — | Up to 12 photos with captions |

---

## Saving & Loading

- **Save** — writes to local storage and back to the last Save As file (if one exists)
- **Save As** — choose file name and location, retains handle for future saves
- **Open** — load a previously saved JSON file
- **Reset** — clears all form data (confirmation required)
- **Auto-save** — runs silently every 60 seconds to local storage

---

## Updating the App

1. Edit `index.html` locally
2. Upload the new version to GitHub (replace the existing file)
3. GitHub Pages updates within a minute
4. Devices pick up the update next time they connect

---

*Manor Switchgear & Controls Ltd — Internal Document*
