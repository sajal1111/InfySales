# 🚀 InfySales – Franchise Selling Platform

A full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** application that digitizes and automates the complete franchise application and onboarding process.

Applicants can apply for a franchise, administrators can review and approve applications, and approved franchise owners receive login credentials via email to access their sales dashboard.

---

## ✨ Features

### 👤 Applicant
- Apply for a franchise
- Submit business information
- Track application status

### 👨‍💼 Admin
- Secure JWT-based login
- View all franchise applications
- Approve or reject applications
- Automatically generate franchise accounts
- Send login credentials via email

### 🏪 Franchise Owner
- Secure login
- Record sales
- View sales dashboard
- Recover password via email

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Router
- Recharts

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Nodemailer

---

## 📂 Project Structure

```
InfySales
│
├── Backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routers
│   └── server-mvc.js
│
└── Frontend
    ├── public
    ├── src
    └── package.json
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/sajal1111/InfySales.git
```

### Backend

```bash
cd Backend
npm install
npm start
```

### Frontend

```bash
cd Frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the Backend folder.

```
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
JWT_SECRET=your_secret_key
MONGO_URI=your_mongodb_connection_string
```

---

## 📌 Workflow

```
Applicant
      │
      ▼
Apply for Franchise
      │
      ▼
MongoDB Database
      │
      ▼
Admin Dashboard
      │
Approve / Reject
      │
      ▼
Generate Password
      │
      ▼
Send Email (Nodemailer)
      │
      ▼
Franchise Login
      │
      ▼
Sales Dashboard
      │
      ▼
Sales Analytics
```

---

## 🔒 Authentication

- JWT-based Admin Authentication
- Franchise Login
- Protected Backend APIs

---

## 📧 Email Functionality

The system automatically sends emails for:

- Franchise approval
- Login credentials
- Password recovery

---

## 📊 Dashboard

The dashboard includes:

- Applications Management
- Franchise Management
- Sales Entry
- Sales Analytics using Recharts

---

## 🚀 Future Improvements

- Password hashing using bcrypt
- Reset password with secure tokens
- Role-based authentication
- Image upload using Cloudinary
- Pagination
- Search & Filters
- Docker deployment
- Unit & Integration Testing

---

## 👨‍💻 Author

**Sajal Sowna**

B.Tech – Electronics and Communication Engineering  
Malaviya National Institute of Technology (MNIT), Jaipur

GitHub: https://github.com/sajal1111

---

## 📄 License

This project is developed for educational and learning purposes.
