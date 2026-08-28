# Sales Dashboard

A modern, responsive **data visualization dashboard** built with **ECharts 5** and vanilla JavaScript. No framework, no build step — open it and it works.

## ✨ Features

- 📈 **Revenue trend** line chart (with smooth gradient area)
- 📊 **Sales by category** bar chart
- 🥧 **Traffic sources** donut chart
- 📅 **Weekly orders** bar chart
- 🏆 **Top products** horizontal bar chart
- 💳 **KPI cards** with up/down deltas
- 📋 **Recent orders** table with status badges
- 📱 Fully responsive (CSS Grid auto-fit)
- 🗂️ Mock data isolated in `data.js` — swap for a real API in minutes

## 🖥️ Quick Start

Just open `index.html` in a browser. The only external dependency is **ECharts**, loaded from a CDN.

Or serve it locally:

```bash
python -m http.server 8000   # then open http://localhost:8000
```

## 🛠️ Tech Stack

| Layer    | Technology |
|----------|------------|
| Charts   | ECharts 5 (CDN) |
| Layout   | CSS Grid + Flexbox, responsive |
| Logic    | Vanilla JavaScript (IIFE, strict mode) |
| Data     | Mock JSON in `data.js` |

## 📁 Project Structure

```
dashboard/
├── index.html   # Page layout
├── style.css    # Dashboard styling
├── data.js      # Mock data (replace with API later)
├── app.js       # Chart rendering + table logic
└── README.md
```

## 🔌 Wiring Up Real Data

`data.js` exports a single `MOCK_DATA` object. To connect a backend:

```js
const MOCK_DATA = await fetch("/api/dashboard").then(r => r.json());
```

Or simply replace the values in `MOCK_DATA` — the app re-renders everything from it.

## 🚀 Possible Extensions

- Date range filter (the period dropdown is ready in the HTML)
- Drill-down charts (click a bar → detail view)
- Dark mode
- Export charts as images (ECharts has `getDataURL()`)
- Real-time updates via WebSocket

## 📄 License

MIT — free to use and modify.

---

*Built with ❤️ to showcase data visualization skills with ECharts.*
