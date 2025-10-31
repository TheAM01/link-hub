
# 📌 LinkTree Clone App

A minimal LinkTree-like web application built with **Next.js (App Router)**, **TypeScript**, and **MongoDB (Mongoose)**.

This project allows users to create and manage links, and it tracks basic analytics (click counts) for each link.

---

## **Features (so far)**

* Create links with `title` and `URL`.
* Order links for display using `order` field.
* Track how many times each link has been clicked (`clicks`).
* Simple dashboard UI to manage and create links.
* TypeScript-safe Mongoose models.
* Hot-reload-safe MongoDB connection helper.

---

## **Tech Stack**

* **Frontend & Framework**: Next.js 15.5.6+ (App Router) + React
* **Language**: TypeScript
* **Database**: MongoDB (via Mongoose)
* **Styling**: Tailwind CSS
* **Server Actions**: Next.js server actions for DB operations

---


## **Getting Started**

### 1. Clone the repository

```bash
git clone https://github.com/TheAM01/link-hub.git
cd link-hub
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root:

```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
```

Replace `<username>`, `<password>`, and `<dbname>` with your MongoDB credentials.

---

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

---

## **Usage**

1. Navigate to the dashboard page (e.g., `/dashboard` if you route it there).
2. Use the form to create new links with title and URL.
3. Links are displayed below the form.
4. Each link tracks clicks (analytics feature coming next).

---

## **Next Steps / TODO**

* Increment link `clicks` whenever a link is visited.
* Add link editing and deletion.
* User authentication to manage multiple profiles.
* Public-facing profile page (like LinkTree).
* Analytics dashboard with charts.

---

## **License**

MIT License — feel free to use, modify, or extend this project.
