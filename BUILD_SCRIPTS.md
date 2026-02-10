# Build Scripts Guide

Two build scripts to manage path conversions between local development and production:

## Scripts

### `build-for-production.py`
Converts relative paths to absolute paths for production deployment.

**What it changes:**
- `./navbar.html` → `/navbar.html`
- `./index.html` → `/index`
- `./goatmountain.html` → `/goatmountain`
- `./grainelevators.html` → `/grainelevators`
- `./skimmerhorns.html` → `/skimmerhorns`
- `./kootenaylake.html` → `/kootenaylake`
- `./drivebccameras.html` → `/drivebccameras`
- `./airport.html` → `/airport`

**Usage:**
```powershell
python build-for-production.py
```

**When to use:**
- Before committing to your production server
- Before deploying to crestonvalleycameras.ca

---

### `build-for-local.py`
Converts absolute paths back to relative paths for local development.

**What it changes:**
- `/navbar.html` → `./navbar.html`
- `/index` → `./index.html`
- `/goatmountain` → `./goatmountain.html`
- (and all other pages)

**Usage:**
```powershell
python build-for-local.py
```

**When to use:**
- After deploying to production
- When returning to local development
- Before testing locally again

---

## Workflow Example

### Local Development
1. Make changes to your HTML/CSS/JS
2. Test locally with `python -m http.server 8000`
3. Verify everything works

### Before Production Deployment
1. Run: `python build-for-production.py`
2. Verify the changes in `navbar.html` and `load-navbar.js`
3. Commit and push to production server

### Back to Local Development
1. Run: `python build-for-local.py`
2. Continue local development

---

## What Gets Modified

**Files that change:**
- `html/navbar.html` (href paths)
- `html/load-navbar.js` (fetch path)

**Files that DON'T change:**
- All HTML page files
- styles.css
- scripts.js
- randomize-logos.js
- Other assets

---

## Safety Notes

✅ **Safe to run multiple times** — The scripts only update paths, they're idempotent  
✅ **Easy to reverse** — Run the opposite script anytime  
✅ **Non-destructive** — No files are deleted, only text is replaced  

---

## Manual Alternative

If you prefer to update paths manually:

**For Production:** In `navbar.html` and `load-navbar.js`, replace all `./` with `/` and remove `.html` extensions from links.

**For Local:** In `navbar.html` and `load-navbar.js`, replace all `/` with `./` and add `.html` to links.

---

## Troubleshooting

**"Error: html directory not found"**
- Make sure you run the script from the project root directory (where this README is)
- The script expects: `./html/navbar.html`

**Paths didn't update**
- Check that you're running the correct script
- Verify the file paths match what the script expects
- Check file permissions

**Want to check what changed?**
```powershell
git diff html/navbar.html
git diff html/load-navbar.js
```

