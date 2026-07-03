# Web Scenarios Testing Suite

A comprehensive collection of web testing scenarios for iframes, Shadow DOM, postMessage, cross-origin security, and deep/large screen text testing.

## 🚀 Quick Start

### For GitHub Pages

1. **Create a GitHub Repository**
   - Create a new public repository on GitHub
   - Name it something like `web-scenarios-test-suite`

2. **Push Your Files**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Web Scenarios Testing Suite"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/web-scenarios-test-suite.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages** (in left sidebar)
   - Under **Source**, select:
     - **Branch**: `main`
     - **Folder**: `/ (root)`
   - Click **Save**

4. **Access Your Site**
   Your site will be available at:
   ```
   https://YOUR_USERNAME.github.io/web-scenarios-test-suite/
   ```

## 📁 Folder Structure

```
All_Scenarios/
├── index.html                          # Main landing page
├── README.md                           # This file
├── nested_iframes_scenarios/          # Nested iframe scenarios
│   ├── main.html
│   ├── level1-same-origin.html
│   ├── level1-same-to-cross.html
│   ├── level2-same-origin.html
│   └── level3-same-origin.html
├── page_with_post_message_issues/     # PostMessage scenarios
│   ├── bofa_test.html
│   ├── bofa_main.js
│   └── bofa_iframe_content.html
├── page_with_shadow_roots_and_iframes/ # Shadow DOM scenarios
│   ├── main.html
│   ├── iframe_set3.html
│   ├── iframe_set6.html
│   └── iframe_set9.html
└── deep_large_screen_text/            # Deep & large screen text generator
    ├── main.html                       # Generator UI (depth/size sliders)
    └── generated.html                  # Self-building target page (reads ?depth=&size=)
```

## 🧪 Test Scenarios

### 1. Nested Iframes Scenarios
Test various combinations of nested iframes with different origin configurations:
- Same Origin → Cross Origin → Cross Origin
- Cross Origin → Same Origin → Cross Origin
- Triple Cross-Origin Nesting
- Triple Same-Origin Nesting

**Access:** `nested_iframes_scenarios/main.html`

### 2. PostMessage Security Scenarios
Test postMessage communication patterns and security validation:
- Popup modal with iframe content
- PostMessage validation mechanisms
- Cross-origin iframe communication
- Message format validation

**Access:** `page_with_post_message_issues/bofa_test.html`

### 3. Shadow DOM & Iframes
Test Shadow DOM elements combined with iframes:
- Regular DOM elements (baseline)
- 1-level Shadow Root
- Nested Shadow Roots (2, 4, 5 levels)
- Shadow DOM with embedded iframes

**Access:** `page_with_shadow_roots_and_iframes/main.html`

### 4. Deep & Large Screen Text
Generate a page with a controllable DOM nesting depth and total size to test deep / large `screen_text` capture (e.g. JSON recursion-depth limits and large-payload handling):
- Maximum DOM tree depth slider (1 – 10,000 levels)
- Overall screen text size slider (1 – 100 MB)
- "Generate page" builds a real same-origin URL: `generated.html?depth=…&size=…`
- "Go to page" opens that real `https` page in a new tab; the deep spine (padded with content blocks to the target size) is built on load
- Because it is a real page (not a `blob:` URL), browser extensions capture it normally
- Confirmation prompt for extreme values (depth > 3,000 or size > 25 MB) that may freeze the browser

**Access:** `deep_large_screen_text/main.html`

## 🎯 Testing Focus Areas

- **Cross-Origin Security:** Same-origin vs cross-origin iframe behavior
- **Nested Contexts:** Multi-level iframe nesting (up to 3 levels)
- **PostMessage Security:** Message format validation
- **Shadow DOM Isolation:** Shadow DOM with embedded iframes
- **DOM Access:** Testing access in different security contexts
- **Deep / Large DOM:** Configurable nesting depth and screen text size for recursion-depth and large-payload testing

## 🔧 Technical Details

- All paths are relative for GitHub Pages compatibility
- Uses sandbox attributes for iframe security control
- Data URLs simulate cross-origin content
- Console logging demonstrates access restrictions
- Responsive design for different screen sizes

## 📝 Usage

1. Open `index.html` in your browser or deploy to GitHub Pages
2. Navigate to any scenario from the landing page
3. Use browser DevTools to inspect console logs and DOM structure
4. Test your automation tools, security scanners, or browser extensions

## 🌐 Browser Compatibility

Tested and compatible with:
- Chrome/Edge (Chromium)
- Firefox
- Safari

## 📄 License

This is a testing suite - use as needed for your testing purposes.

