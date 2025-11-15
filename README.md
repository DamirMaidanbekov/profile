# Damir Maidanbekov — Personal Site

A fast, responsive, multilingual (RU/KK/EN) portfolio site with light/dark theme and subtle animations. Built as static HTML/CSS/JS for easy hosting on GitHub Pages.

## Structure
- `index.html` — Home
- `experience.html` — Work experience and education
- `projects.html` — Projects gallery
- `contact.html` — Contacts and About
- `assets/css/style.css` — Styles (CSS variables + light/dark)
- `assets/js/i18n.js` — Client‑side translations (RU/KK/EN)
- `assets/js/main.js` — Theme toggle, language switch, animations
- `img/` — Avatars, project shots, certificates

## Run locally
Open any page directly in the browser, or start a quick server:

```powershell
# Windows PowerShell quick server
# Option 1: Python 3 if installed
python -m http.server 8010 ; Start-Process http://localhost:8010/index.html

# Option 2: Node (npx) if installed
npx serve -l 8010 . ; Start-Process http://localhost:8010/index.html
```

## Deploy to GitHub Pages
1. Create a new repo (e.g., `profile`).
2. Commit and push all files to the `main` branch.
3. In repo Settings → Pages: Source = `Deploy from a branch`, Branch = `main` (root). Save.
4. Your site will be available at `https://<username>.github.io/<repo>/`.

If you use a custom domain, add `CNAME` file at repo root.

## Customize
- Translations: edit keys in `assets/js/i18n.js`.
- Images: replace in `img/` keeping filenames or update paths in HTML.
- Colors: tune CSS variables in `:root` and `html[data-theme="light"]`.

## Notes
- Theme is saved to `localStorage` and respects `prefers-color-scheme`.
- Language choice persists via `localStorage`.
