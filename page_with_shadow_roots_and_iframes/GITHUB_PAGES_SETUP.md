# GitHub Pages Setup Guide

## Quick Setup Steps

### 1. Create a GitHub Repository
- Go to [GitHub](https://github.com) and create a new repository
- Name it something like `shadow-dom-test-pages` (or any name you prefer)
- Make it **public** (required for free GitHub Pages)
- **Don't** initialize with README, .gitignore, or license

### 2. Initialize Git and Push Files

Open PowerShell/Terminal in this directory and run:

```powershell
# Navigate to this directory
cd "QA_Validation\page_with_shadow_roots_and_iframes"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Shadow DOM test pages"

# Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (in left sidebar)
4. Under **Source**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes for GitHub to build your site

### 4. Access Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/REPO_NAME/page_with_shadow_roots_and_iframes.html
```

## Alternative: Use GitHub Desktop

If you prefer a GUI:
1. Download [GitHub Desktop](https://desktop.github.com/)
2. File → Add Local Repository → Select this folder
3. Publish repository to GitHub
4. Follow step 3 above to enable Pages

## Notes

- All iframe files (`iframe_set3.html`, `iframe_set6.html`, `iframe_set9.html`) must be in the same directory
- GitHub Pages serves static files only (HTML, CSS, JS)
- Changes take 1-2 minutes to appear after pushing
- Make sure your repository is **public** for free hosting

