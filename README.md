# SQL Query Editor with Copilot

A sleek, responsive, and developer-friendly web-based SQL editor built with **React**, powered by **CodeMirror**, and enhanced with a built-in **AI SQL Copilot**. Supports dark mode, export options, query history, and more!

![App Preview](https://sql-editor-aditi.pages.dev/) <!-- Optional: Add a screenshot -->

---

##  Features

-  **Live SQL Editor** with CodeMirror & syntax highlighting  
-  **Dark & Light Theme Toggle** (Persistent via Local Storage)  
-  **AI SQL Copilot** – Generate queries from plain English prompts  
-  **Query History** with search & restore support  
-  **Sample Query Selector** (mock data-based)  
-  **Export Results** to CSV or JSON  
-  **Execution Timer**  
-  **Result Views** – Table, Raw JSON, Metadata  
-  **Accessibility-Friendly** (ARIA improvements & keyboard nav)  
-  **Deployed on Cloudflare Pages** – blazing fast & scalable

---

##  Tech Stack

| Tech           | Purpose                        |
|----------------|--------------------------------|
| React          | UI Framework                   |
| Vite           | Lightning-fast build tool      |
| CodeMirror     | Rich code editing experience   |
| Cloudflare Pages | Seamless deployment          |
| LocalStorage   | Persistent theme/history state |
| Font: Inter    | Clean, modern typography       |

---

## Setup Instructions

```bash
# 1. Clone the repo
git clone https://github.com/AditiKulkarni9/sql-editor.git
cd atlan-project

# 2. Install dependencies
npm install

# 3. Run the dev server
bun run dev
