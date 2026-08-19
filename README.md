# Johnstheward Alvarado — Portfolio

A single-page portfolio built with plain HTML, CSS, and JavaScript — no
frameworks, no build step. Three files:

```
portfolio/
├── index.html   ← all your content lives here
├── style.css    ← all colors, fonts, spacing, layout
└── script.js    ← interactivity (nav highlighting, scroll reveal, copy button)
```

The design is a "circuit schematic" theme: a glowing trace line runs down
the page like a PCB trace, skills are shown as breadboard pins, and the
contact section looks like a terminal — tying back to your networking /
hardware background.

---

## 1. Open it in VS Code

1. Download the `portfolio` folder to your computer (e.g. into `Documents`).
2. Open VS Code.
3. `File → Open Folder…` and select the `portfolio` folder.
4. You'll see `index.html`, `style.css`, and `script.js` in the sidebar.

## 2. Preview it live as you edit

The easiest way is the **Live Server** extension:

1. In VS Code, click the Extensions icon (left sidebar, looks like 4 squares).
2. Search "Live Server" (by Ritwick Dey) and click **Install**.
3. Open `index.html`, then right-click anywhere in the file and choose
   **"Open with Live Server"** (or click "Go Live" in the bottom-right corner
   of the window).
4. Your browser opens automatically at something like `http://127.0.0.1:5500`.
   Any time you save a file (`Ctrl+S` / `Cmd+S`), the page refreshes automatically.

*(No Live Server? You can also just double-click `index.html` to open it
directly in a browser — everything will work except you'll need to
manually refresh after each edit.)*

## 3. Edit your content

Open `index.html`. Every section is marked with a comment like:

```html
<!-- ============================================= -->
<!-- HERO — edit name / role / tagline here          -->
<!-- ============================================= -->
```

Just find the section you want to change and edit the text between the
HTML tags. A few common edits:

- **Change your tagline:** find `<p class="hero-tagline">` and edit the text inside.
- **Add a new job:** in the Experience section, copy one whole `<div class="node">...</div>`
  block and paste it, then edit the title, dates, org, and bullet points.
- **Add a new skill:** in the Skills section, find the right `<div class="pins">` block
  and add a new line like `<span class="pin">Your Skill</span>`.
- **Update contact info:** in the Contact section, edit the email/phone text
  and also update the `href="mailto:..."` and `href="tel:..."` values to match.

You don't need to touch `style.css` or `script.js` to update content — `index.html`
is the only file with your words in it.

## 4. Customize the look (optional)

Open `style.css`. At the very top is a block called `:root` with all the
colors and fonts as named variables:

```css
:root {
  --bg:      #0E2436;   /* main background */
  --accent:  #6FE8D9;   /* the cyan "signal" color */
  --warm:    #FFB454;   /* amber highlight color */
  --text:    #EAF3F8;   /* main text color */
  ...
}
```

Change any hex value here and it updates everywhere that color is used —
you don't need to hunt through the file.

## 5. Publish it for free

Once you're happy with it, pick one:

**Option A — GitHub Pages (recommended, free, simple)**
1. Create a free GitHub account and a new repository (e.g. `portfolio`).
2. Upload `index.html`, `style.css`, and `script.js` to it (drag-and-drop
   on github.com works fine, or use `git` from VS Code's Source Control tab).
3. In the repo, go to **Settings → Pages**, set the source to your main
   branch, and save.
4. Your site goes live at `https://your-username.github.io/portfolio/`.

**Option B — Netlify Drop (fastest, no account needed to start)**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag your `portfolio` folder onto the page.
3. It gives you a live URL instantly. You can create a free account
   afterward to keep it permanently and set a custom subdomain.

---

## What's already interactive

- **Sticky nav** that highlights the section you're currently viewing.
- **Mobile menu** (hamburger icon appears under ~720px width).
- **Scroll-reveal** — each section fades/slides in as you scroll to it.
- **Trace pulse** — the glowing dot on the side line tracks your scroll position.
- **Signal bars** animate in the hero.
- **Copy email button** in the Contact section copies your email to clipboard.
- Respects `prefers-reduced-motion` for accessibility, and all interactive
  elements have visible keyboard focus outlines.
