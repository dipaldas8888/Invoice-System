# 🧾 Invoice Details – Full Stack Application

A simple full-stack Invoice Management module built with:

- ⚙️ Node.js + Express
- 🗄 MongoDB + Mongoose
- ⚛️ React (Vite)
- 🎨 Tailwind CSS

This project allows:
- Creating invoices
- Adding line items
- Making payments
- Automatic balance calculation
- Archiving invoices

---

# 📌 Features

## 🔹 Invoice
- Invoice Number
- Customer Name
- Issue Date
- Due Date
- Status (DRAFT / PAID)
- Total
- Amount Paid
- Balance Due
- Archive / Restore

## 🔹 Line Items
- Description
- Quantity
- Unit Price
- Line Total (quantity × unitPrice)

## 🔹 Payments
- Partial payments
- Overpayment prevention
- Auto status update to PAID when balance = 0

---

# 🛠 Tech Stack

## Backend
- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- cors

## Frontend
- React (Vite)
- Axios
- React Router
- Tailwind CSS

---

# 📁 Project Structure


Invoice_Details/
│
├── backend/
│ ├── src/
│ │ ├── config/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ └── server.js
│ └── .env
│
└── frontend/
├── src/
│ ├── api/
│ ├── components/
│ ├── pages/
│ └── App.jsx


---

# 🚀 Backend Setup

## 1️⃣ Navigate to backend


cd backend


## 2️⃣ Install dependencies


npm install


## 3️⃣ Create `.env` file


PORT=8080
MONGO_URI=mongodb+srv://myappuser:iZHMSTUnFqVNLtyE@cluster0.ilnyyuz.mongodb.net/?appName=Cluster0


Make sure MongoDB is running locally.

## 4️⃣ Start server


npm run dev


Server runs at:


http://localhost:8080


---

# 🌐 Frontend Setup

## 1️⃣ Navigate to frontend


cd frontend


## 2️⃣ Install dependencies


npm install


## 3️⃣ Start development server


npm run dev


Frontend runs at:


http://localhost:5173


