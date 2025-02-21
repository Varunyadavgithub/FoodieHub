# 🍽️ FoodieHub (MERN Stack + TypeScript)

## 📌 Overview

This is a **production-ready restaurant website** built using the **MERN stack** (MongoDB, Express, React, Node.js) with **TypeScript** for type safety. The project features robust authentication, restaurant search and filtering, online ordering, admin management, and secure **Stripe payment integration**.

This application follows best practices for **responsive UI with Tailwind CSS**, and **state management using Zustand**.

## ✨ Features

- **Authentication & Authorization**
  - User registration, login, logout
  - 6-digit token-based email verification
  - Password recovery & reset
  - Role-based access control (User & Admin)
- **Restaurant Management**
  - Browse restaurants & filter by category
  - View restaurant details & available menus
  - Add items to cart & checkout
- **Admin Panel**
  - Add, edit, and manage restaurants & menus
  - Track and manage customer orders
- **Payment Integration**
  - **Stripe** for secure online payments
  - **Stripe webhooks** for real-time order updates
- **Email Notifications**
  - **Mailtrap** for email verification & order confirmations
- **Modern UI/UX**
  - **ShadCN UI** & **Tailwind CSS** for a sleek design
  - **Loading skeletons** for a smooth experience
  - **Light/Dark mode** toggle
- **Performance & Security**
  - JWT-based authentication
  - Optimized database schema
  - Secure API endpoints
- **Deployment**
  - Deployed on **Render** for full-stack hosting
  - CI/CD workflow using **Git & GitHub**

## 🛠️ Tech Stack

| Technology           | Description                                           |
| -------------------- | ----------------------------------------------------- |
| **Frontend**         | React, TypeScript, Zustand, Tailwind CSS, ShadCN UI   |
| **Backend**          | Node.js, Express, MongoDB, Cloudinary (image storage) |
| **Authentication**   | JWT, Zod for validation, Mailtrap for emails          |
| **Payments**         | Stripe API & Webhooks                                 |
| **State Management** | Zustand                                               |
| **Deployment**       | Render, GitHub                                        |

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/Varunyadavgithub/FoodieHub.git
cd FoodieHub
```

### 2️⃣ Install Dependencies

#### Frontend

```sh
cd client
npm install
```

#### Backend

```sh
cd server
npm install
```

### 3️⃣ Set Up Environment Variables

Create a **.env** file in the backend folder with the following:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET=your_stripe_secret_key
MAILTRAP_USER=your_mailtrap_username
MAILTRAP_PASS=your_mailtrap_password
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### 4️⃣ Run the Application

#### Start Backend Server

```sh
cd server
npm run dev
```

#### Start Frontend

```sh
cd client
npm start
```

## 📷 Screenshots

🔹 _[Add screenshots of key pages like homepage, restaurant listing, admin panel, etc.]_

## 📝 API Endpoints

| Method | Endpoint                  | Description                |
| ------ | ------------------------- | -------------------------- |
| `POST` | `/api/v1/auth/signup`     | User signup                |
| `POST` | `/api/v1/auth/login`      | User login                 |
| `POST` | `/api/v1/auth/verify`     | Verify 6-digit OTP         |
| `POST` | `/api/v1/restaurants`     | Add new restaurant (Admin) |
| `GET`  | `/api/v1/restaurants`     | Get all restaurants        |
| `GET`  | `/api/v1/restaurants/:id` | Get restaurant details     |
| `POST` | `/api/v1/orders`          | Place an order             |

## 📌 Deployment

- The frontend and backend are deployed on **Render**.
- CI/CD is handled through **GitHub Actions**.

## 🤝 Contribution

Feel free to contribute by creating issues, adding new features, or optimizing the code. Fork the repo, make changes, and submit a pull request.

## 📜 License

This project is **MIT Licensed**.
