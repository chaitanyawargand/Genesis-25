# Genesis 2025 - IIC WebDev Inductions’25

## 🔹 Overview

**Genesis 2025** is the flagship event of IIC. This project demonstrates a **full-stack web application** built with **React frontend**, **Node.js backend**, and **Framer Motion animations**.
It showcases **UI/UX creativity**, responsive design, smooth interactivity, and secure registration handling.

---

## 🔹 Frontend Features (React + Framer Motion)

* **Hero Section**

  * Event name and tagline
  * “Register Now” button scrolls to registration form
  * Responsive banner with background image or gradient
* **About Genesis Section**

  * Short description of Genesis 2025
  * Engaging visuals/icons
* **Event Highlights**

  * Interactive cards/tiles with hover effects
  * Highlights include: Pitching, Networking, Jury, Cash Prizes
* **Timeline**

  * Visually appealing timeline (horizontal/vertical)
  * Phases: Registration → Shortlisting → Pitching → Finale
* **Contact & Footer**

  * Contact details: Email, WhatsApp Community, Instagram
  * Footer text: “Made by IIC WebOps Team”
* ⚡ **Bonus Features**

  * Dark mode toggle
  * Smooth transitions and subtle animations using **Framer Motion**
  * Smooth scrolling effects

---

## 🔹 Backend Features (Node.js)

* **Registration Form API**

  * Fields: Name, Email, Phone, Team/Startup Name, Idea Brief
  * Input validation (email format, phone number, required fields)
* **Database Integration Options**

  * Firebase (Realtime DB / Firestore)
  * Google Sheets API
  * Supabase (Postgres + Auth)
* **Data Handling**

  * Store registration data securely
  * Display success message after submission
  * Prevent duplicate entries based on email/phone
* **Optional Admin Dashboard**

  * Simple page listing all registrations
  * Export registrations to CSV/Excel
* ⚡ **Bonus Feature**

  * Email confirmation to registrants using **Nodemailer** (Node.js)

---

## 🔹 Tech Stack

* **Frontend:** React.js, Framer Motion, HTML, CSS, JavaScript
* **Backend:** Node.js, Express.js
* **Database:** Firebase / Supabase / Google Sheets
* **Other Tools:** Nodemailer (email notifications), Git & GitHub

---

## 🔹 Project Structure

```
project-root/
├─ backend/
│  ├─ controllers/
│  ├─ routes/
│  ├─ models/
│  ├─ utils/
│  ├─ server.js
│  └─ .env
├─ frontend/
│  ├─ public/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ pages/
│  │  ├─ context/
│  │  ├─ hooks/
│  │  ├─ assets/
│  │  ├─ styles/
│  │  ├─ App.js
│  │  └─ index.js
│  └─ .env
├─ screenshots/
├─ .gitignore
└─ README.md
```

---

## 🔹 Setup Instructions

### 1. Clone the repository

```bash
git clone <repo-url>
cd <repo-folder>
```

### 2. Install dependencies

**Frontend:**

```bash
cd frontend
npm install
npm start
```

**Backend:**

```bash
cd backend
npm install
node server.js
```

### 3. Configure Environment Variables

* Create a `.env` file in the backend folder
* Add your keys: Firebase, Supabase, or Google Sheets API credentials

## 🔹 Submission

* **Frontend repo:** Contains React UI/UX design, responsiveness, and interactivity
* **Backend repo:** Handles form submissions, database integration, and API routes
* **Screenshots:** all screenshot of the website
* ""Demo-video:""Demo video of working website.
---
## 🔹 License / Footer
Made by **IIC WebOps Team**
```}
```
