# Axisora Forge — SPA Build (GitHub Pages Ready)

This is the **static SPA version** of the Axisora Forge website, migrated from TanStack Start (SSR)
to TanStack Router (pure client-side SPA). All animations, styles, and functionality are preserved.

## What changed from the Lovable source

| Before (TanStack Start) | After (This repo) |
|---|---|
| SSR server + Nitro/Cloudflare | Pure SPA — just a `dist/` folder |
| `src/server.ts`, `src/start.ts` | Deleted (not needed) |
| `src/lib/config.server.ts` | Deleted |
| `src/lib/api/example.functions.ts` | Deleted (was unused anyway) |
| `src/routes/__root.tsx` with SSR shell | Clean SPA root |
| `src/main.tsx` (SSR hydration) | `createRoot()` SPA entry |
| Deployed to Cloudflare Workers | Deploys to GitHub Pages |

Everything else is **identical**: all React components, Tailwind CSS, Framer Motion animations,
Radix UI, the inquiry form (WhatsApp + optional Google Sheets webhook), and all route data.

---

## Quick start (local dev)

```bash
npm install
npm run dev
```

---

## Deploy to GitHub Pages

### Step 1 — Create the GitHub repo

1. Go to [github.com/new](https://github.com/new)
2. Create a repo — e.g. `axisora-forge`
3. Push this folder to it:

```bash
git init
git add .
git commit -m "Initial SPA build"
git remote add origin https://github.com/YOUR-USERNAME/axisora-forge.git
git push -u origin main
```

### Step 2 — Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Save

### Step 3 — Set your repo name in the workflow

Open `.github/workflows/deploy.yml` and replace `YOUR-REPO-NAME` on this line:

```yaml
run: VITE_BASE_PATH=/axisora-forge npm run build
```

Replace `axisora-forge` with your actual repo name (exactly as it appears in GitHub).

### Step 4 — Push and wait ~2 minutes

```bash
git add .github/workflows/deploy.yml
git commit -m "Set repo name for GitHub Pages"
git push
```

Go to **Actions** tab in your repo to watch the build. Once green, your site is live at:
`https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

---

## Custom domain (optional)

If you have a domain like `axisoraforge.com`:

1. In `vite.config.ts`, the base is already `/` when `VITE_BASE_PATH` is not set.
2. Change the workflow build line to just `npm run build` (no `VITE_BASE_PATH`).
3. In `public/`, create a file called `CNAME` with your domain:
   ```
   axisoraforge.com
   ```
4. In your DNS provider, add an `A` record pointing to GitHub Pages IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
5. In GitHub → Settings → Pages → Custom domain, enter `axisoraforge.com`

---

## Configure the inquiry form (Google Sheets webhook)

The form currently opens WhatsApp directly. To also save submissions to a Google Sheet:

1. Open `src/lib/site-config.ts`
2. Create a Google Apps Script Web App (see below) and paste its URL into `sheetsWebhookUrl`

**Apps Script setup:**
1. Go to [script.google.com](https://script.google.com) → New project
2. Paste this code:
   ```javascript
   function doPost(e) {
     const data = JSON.parse(e.postData.contents);
     const sheet = SpreadsheetApp.openById("YOUR_SHEET_ID").getActiveSheet();
     sheet.appendRow([
       data.timestamp, data.name, data.email, data.phone,
       data.category, data.course, data.projectType,
       data.budget, data.timeline, data.message, data.source
     ]);
     return ContentService.createTextOutput("OK");
   }
   ```
3. Deploy → New deployment → Web app → Execute as: Me → Who has access: Anyone
4. Copy the `/exec` URL into `SITE.sheetsWebhookUrl` in `site-config.ts`
