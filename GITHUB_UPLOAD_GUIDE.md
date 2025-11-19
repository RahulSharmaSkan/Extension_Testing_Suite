# GitHub Upload Guide

## Option 1: Using Git Commands (Recommended)

### Step 1: Open PowerShell/Terminal in your project folder

Navigate to your project directory:
```powershell
cd "C:\Users\RahulSharma\OneDrive - Skan Inc\Desktop\All_Scenarios"
```

### Step 2: Initialize Git (if not already done)

```powershell
git init
```

### Step 3: Add all files

```powershell
git add .
```

### Step 4: Commit files

```powershell
git commit -m "Initial commit: Web Scenarios Testing Suite"
```

### Step 5: Create repository on GitHub

1. Go to https://github.com/new
2. Repository name: `web-scenarios-test-suite` (or any name you prefer)
3. Make it **Public** (required for free GitHub Pages)
4. **DO NOT** initialize with README, .gitignore, or license
5. Click **Create repository**

### Step 6: Connect and push

GitHub will show you commands. Use these:

```powershell
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/web-scenarios-test-suite.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

---

## Option 2: Using GitHub Desktop (Easiest GUI Method)

### Step 1: Download GitHub Desktop
- Download from: https://desktop.github.com/
- Install and sign in with your GitHub account

### Step 2: Add Local Repository
1. Open GitHub Desktop
2. Click **File** → **Add Local Repository**
3. Click **Choose...** and select your `All_Scenarios` folder
4. Click **Add Repository**

### Step 3: Publish to GitHub
1. Click **Publish repository** button (top right)
2. Name your repository (e.g., `web-scenarios-test-suite`)
3. Make sure **"Keep this code private"** is **UNCHECKED** (for GitHub Pages)
4. Click **Publish Repository**

---

## Option 3: Using GitHub Web Interface (File by File)

### Step 1: Create Repository
1. Go to https://github.com/new
2. Create a new repository (make it Public)
3. **DO NOT** initialize with README

### Step 2: Upload Files
1. Click **"uploading an existing file"** link
2. Drag and drop **individual files** (not folders)
3. Or click **"choose your files"** to browse

**Note:** You'll need to:
- Upload files from root folder first (`index.html`, `README.md`)
- Then create folders manually by typing folder name + `/` in the filename field
- Upload files inside each folder one by one

**This is tedious - use Option 1 or 2 instead!**

---

## Option 4: Upload as ZIP (Then Extract)

### Step 1: Create ZIP file
1. Right-click your `All_Scenarios` folder
2. Select **"Send to"** → **"Compressed (zipped) folder"**

### Step 2: Upload ZIP to GitHub
1. Create a new repository on GitHub
2. Click **"uploading an existing file"**
3. Upload the ZIP file
4. GitHub will show the ZIP contents
5. You can download and extract, but this doesn't help with GitHub Pages

**Better:** Extract the ZIP locally, then use Option 1 or 2.

---

## After Uploading: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click **Save**

Your site will be live at:
```
https://YOUR_USERNAME.github.io/web-scenarios-test-suite/
```

---

## Troubleshooting

### "Permission denied" error
- Make sure you're logged into GitHub
- Check your Git credentials: `git config --global user.name` and `git config --global user.email`

### "Repository not found" error
- Check the repository URL is correct
- Make sure the repository exists on GitHub
- Verify you have access to the repository

### Files not showing up
- Make sure you ran `git add .` before commit
- Check `git status` to see what files are staged

---

## Quick Command Reference

```powershell
# Navigate to project folder
cd "C:\Users\RahulSharma\OneDrive - Skan Inc\Desktop\All_Scenarios"

# Initialize Git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Rename branch to main
git branch -M main

# Add remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git push -u origin main
```

