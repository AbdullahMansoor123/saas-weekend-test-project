# 🛠️ SaaS Weekend Planner

Launch a SaaS project in just one weekend using this step-by-step planner. This app helps you organize ideas, plan MVPs, and track your progress — no coding experience required.

> 📅 Inspired by: “Build and Sell a SaaS in a Weekend” framework

---

## ✨ Features

* ✅ 7 structured project phases (idea → launch)
* 🧠 Smart prompts to guide your thinking
* 💾 Auto-save progress in browser
* 📋 Downloadable project report
* 🔗 Helpful tools linked per phase (ChatGPT, Reddit, Framer, etc.)
* 🌐 Deployable with one click on Vercel

---

## 📸 Landing Page

![landing page](images\landing_page.png)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/saas-weekend.git
cd saas-weekend
```

---

### 2. Install dependencies

Make sure you have [Node.js](https://nodejs.org) installed (LTS version).

```bash
npm install
```

---

### 3. Run the development server

```bash
npm run dev
```

Open your browser and go to:
📍 `http://localhost:3000`

---

## 🌐 Deploy Online (Free)

### Using Vercel

1. Create a GitHub repo and push this project
2. Go to [https://vercel.com](https://vercel.com)
3. Click **“New Project”**, and import your GitHub repo
4. Click **Deploy**

✅ Your app is now live!

---

## 🗂️ Project Structure

```
saas-weekend/
├── app/               → Pages (App Router)
│   └── page.tsx       → Main SaaS planner interface
├── public/            → Static assets (optional)
├── styles/            → Tailwind CSS config
├── package.json       → Project metadata
├── .gitignore         → Files to exclude from git
└── README.md          → This file
```

---

## 📁 .gitignore (already included)

Ensures that you don’t commit unnecessary files:

```gitignore
node_modules/
.next/
.env
.vscode/
.DS_Store
```

---

## 🧠 How It Works

1. Navigate through each step (Idea, Planning, MVP, etc.)
2. Answer 3 thought-provoking questions per step
3. Mark the step as completed
4. On the final step, click **“Preview Report”**
5. Download your full plan as a `.txt` file

---

## 🔄 Reset Your Progress

Your answers are stored in your browser. To start over:

* Open Dev Tools → Application → Local Storage
* Or add a “Reset Progress” button in code:

```tsx
localStorage.clear();
location.reload();
```

---

## 📌 Tech Stack

* **Next.js 14+ (App Router)**
* **React 18**
* **Tailwind CSS**
* **TypeScript**
* **Deployed with Vercel**

---

## 🙋 FAQ

**Q: Do I need to know how to code?**
A: Not at all! You can use AI tools + no-code platforms suggested inside the app.

**Q: Can I save multiple projects?**
A: Not yet — but we’re working on a multi-project dashboard!

**Q: Is this free?**
A: Yes! 100% free and open source.

---

## 🤝 Contributing

Pull requests welcome!
If you have suggestions or want to add more templates, feel free to fork and improve.

---

## 📄 License

MIT — use it for any personal or commercial purpose.

---

## 💬 Questions?

Open an issue or contact the creator on [Twitter/X](https://twitter.com) or [GitHub](https://github.com/your-username).
 
 
