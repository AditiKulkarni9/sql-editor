#  SQL Query Executor

This is a fully frontend-based SQL Query Executor built as part of the **Atlan Frontend Assignment**. It allows users to run and interact with SQL queries through a intuitively designed web interface. The project uses **React + Vite**, and the embedded editor is powered by [**CodeMirror 6**](https://codemirror.net/6/).

> **Live Site**: [https://sql-editor-aditi.pages.dev/](https://sql-editor-aditi.pages.dev/)

---

##  Data

Mock data is used for rendering query results. All dataset samples.

---

## Features

-  **SQL Editor with Syntax Highlighting**
-  **Query History with Search**
-  **Light / Dark Mode Toggle**
-  **Output in Table, Raw JSON, and Metadata Views**
-  **Query Execution Timer**
-  **Export as CSV / JSON**
-  **SQL Copilot (AI-Powered Prompt to SQL)**
-  **Responsive + Accessible UI**

---

##  Hosted On

Deployed using **Cloudflare Pages** for fast edge-based content delivery, zero-config SSL, and superior caching.

---

##  Stack and Tools Used

| Category       | Tech                      |
|----------------|---------------------------|
| Framework      | React + Vite              |
| Styling        | Custom CSS                |
| Editor         | CodeMirror 6              |
| Icons          | React Icons (FontAwesome) |
| Hosting        | Cloudflare Pages          |

---

##  Lighthouse Performance

Google Lighthouse and PageSpeed Insights were used for web performance diagnostics and optimization.

**Lighthouse Scores:**

| Metric            | Score    |
|-------------------|----------|
| Performance       | 100      |
| Accessibility     | 92       |
| Best Practices    | 100      |
| SEO               | 92       |

>  Improvements ongoing for Largest Contentful Paint (LCP) and JavaScript bundle optimizations.

---

## 🔧 Optimization Techniques

1. **Preload Critical Assets** – Fonts, themes, and icons are preloaded for faster LCP.
2. **Lazy Loaded Components** – SQL Copilot and export dropdown are dynamically imported with `React.lazy`.
3. **Efficient CSS Usage** – Minimized global styles; uses CSS variables and scoped modules.
4. **Custom Font + Preconnect** – Inter font is loaded via Google Fonts with `<link rel="preconnect">` for speed.
5. **LocalStorage Debouncing** – Query history updates are optimized to reduce re-renders.
6. **Reduced Dependencies** – Minimal external libraries to keep JS bundle lean.

---

## ♿ Accessibility Improvements

- All interactive components have proper `aria-labels` or `title` attributes.
- Scrollable areas have `tabIndex="0"` for keyboard focusability.
- The SQL editor uses `role="textbox"` and supports screen reader access.

---

##  Completed Enhancements

- [x] Cloudflare optimized deployment
- [x] Minified JS + CSS via Vite
- [x] Font preloading
- [x] Editor theming (light/dark)
- [x] Export functionality (CSV + JSON)
- [x] ARIA and keyboard accessibility

---

## 🛠️ Local Setup

```bash
# Clone the repo
git clone https://github.com/AditiKulkarni9/sql-editor.git
cd atlan-project

# Install dependencies
npm install

# Start development server
bun run dev

# Build for production
bun run build
