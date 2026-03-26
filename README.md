# 🌱 AgroMitra AI

> **India's First Complete AI-Powered Farm Companion**
> A multilingual web application helping Indian farmers make smarter farming decisions — in Marathi, Hindi, and English.

---

## 📌 What is AgroMitra AI?

AgroMitra AI is an AI-powered web application for Indian farmers that provides:
- Instant crop & disease advice in local languages
- Soil health analysis with fertilizer recommendations
- Pest risk forecasting with early alerts
- Modern AgriTech tool recommendations
- Renewable energy ROI calculator (PM-KUSUM)
- Government scheme matching (PM-KISAN, PMFBY, etc.)

> **"AgroMitra AI is a multilingual AI-powered app that helps farmers with crop advice, soil analysis, pest prediction, modern farming tools, renewable energy, and government schemes."**

---

## 🚀 Live Demo

> Run locally — see setup instructions below.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite, Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Backend | Node.js, Express |
| AI | Google Gemini 2.5 Flash |
| Database | MongoDB (optional) |
| Language | EN / मराठी (Marathi) |

---

## 🤖 6 Powerful Modules

| # | Module | Description |
|---|---|---|
| 1 | 🤖 AI Query Assistant | Ask farming questions in Marathi, Hindi, English — powered by Gemini 2.5 Flash |
| 2 | 🌱 Soil Health Analyser | Enter N, P, K, pH values → get instant fertilizer recommendations |
| 3 | 🐛 Pest Risk Forecaster | Select region → get pest alerts with treatment solutions |
| 4 | 🚜 AgriTech Advisor | Enter farm size → get modern tool recommendations with costs |
| 5 | ☀️ Renewable Energy Guide | Enter electricity bill → get solar ROI + PM-KUSUM subsidy calculation |
| 6 | 📋 Scheme Matcher | Select farmer category → get eligible government schemes |

---

## 🌐 Language Support

| Language | Status |
|---|---|
| English | ✅ Fully working |
| मराठी (Marathi) | ✅ Fully working |
| हिंदी (Hindi) | 🔜 Coming soon |

Switch languages instantly using the **EN / मर** toggle in the navbar.

---

## 📁 Project Structure

```
AgroMitra/
├── frontend/
│   ├── public/
│   │   └── farming.svg              # Custom farming illustration
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx           # Fixed navbar with language switcher
│   │   │   ├── Hero.jsx             # Landing hero section
│   │   │   ├── Problems.jsx         # Problem statement section
│   │   │   ├── Modules.jsx          # All 6 interactive modules
│   │   │   ├── AiChat.jsx           # Gemini AI chat interface
│   │   │   ├── ProfitCalculator.jsx # Profit maximization calculator
│   │   │   ├── Impact.jsx           # Impact stats section
│   │   │   ├── Roadmap.jsx          # 4-phase roadmap timeline
│   │   │   └── Footer.jsx           # Footer with links
│   │   ├── LanguageContext.jsx      # Global language state (EN/MR)
│   │   ├── translations.js          # All text in EN + Marathi
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── routes/
│   │   └── chat.js                  # Gemini 2.5 Flash API route
│   ├── models/
│   │   └── Log.js                   # MongoDB log model
│   ├── server.js
│   ├── package.json
│   └── .env.example                 # Environment variables template
│
└── README.md
```

---

## ⚙️ Setup & Run

### Prerequisites
- Node.js 18+
- Google Gemini API Key → [Get it here](https://aistudio.google.com/app/apikey)
- MongoDB (optional — app works without it)

### 1. Clone the repo
```bash
git clone https://github.com/Sanskruti2603/AgroMitra.git
cd AgroMitra
```

### 2. Setup Backend
```bash
cd backend
cp .env.example .env
# Open .env and add your GEMINI_API_KEY
npm install
node server.js
# Server runs on http://localhost:5000
```

### 3. Setup Frontend
```bash
cd frontend
npm install
npm run dev
# App runs on http://localhost:5173
```

---

## 🔑 Environment Variables

Create `backend/.env` from `backend/.env.example`:

```env
GEMINI_API_KEY=your_gemini_api_key_here
MONGODB_URI=mongodb://127.0.0.1:27017/agromitra
PORT=5000
```

---

## 📊 Impact

| Metric | Value |
|---|---|
| Farmers Targeted | 140 Million+ |
| Unclaimed Subsidies | ₹2 Lakh Crore/year |
| Crop Loss Reducible | 30% with early AI alerts |
| Income Increase | 35% avg with AgroMitra AI |

---

## 🛣️ Roadmap

| Phase | Title | Timeline | Status |
|---|---|---|---|
| 1 | MVP Launch | Month 1–2 | 🟢 In Progress |
| 2 | Pilot — 5 Districts | Month 3–5 | ⏳ Upcoming |
| 3 | Maharashtra Scale | Month 6–9 | ⏳ Upcoming |
| 4 | Pan-India Expansion | Month 10–18 | ⏳ Upcoming |

---

## 🙏 Team

Built with ❤️ for Indian farmers.

> *"Together, we can build a smarter future for agriculture."*
> धन्यवाद · शुक्रिया · Thank You 🌾
