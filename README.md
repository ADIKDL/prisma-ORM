# Prisma MongoDB CRUD API

A production-ready **Node.js + Express** REST API demonstrating **CRUD operations using Prisma ORM with MongoDB**. This project showcases how to correctly configure Prisma with MongoDB, handle ObjectIds, and build clean REST endpoints.

---

## ✨ Features

* 🚀 Express.js REST API
* 📦 Prisma ORM (v6.19) with MongoDB
* 🔐 MongoDB Atlas / Compass compatible
* 🧩 Automatic ObjectId handling
* 🌱 Environment-based configuration
* 🔄 Full CRUD operations

---

## 🛠 Tech Stack

* **Node.js** (ESM)
* **Express.js**
* **Prisma ORM v6.19**
* **MongoDB (Atlas / Compass)**
* **dotenv**

---

## 📋 Prerequisites

* Node.js **v18+**
* MongoDB Atlas account **or** MongoDB Compass (replica set)
* npm or yarn

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/prisma-mongo-crud.git
cd prisma-mongo-crud
```

Install dependencies:

```bash
npm install
```

---

## ⚙️ Environment Setup

Create a `.env` file in the project root:

```env
DATABASE_URL="mongodb+srv://<username>:<password>@cluster.mongodb.net/prisma_db"
```

> ⚠️ MongoDB **must run as a replica set**. Atlas works out of the box.

---

## 🧬 Prisma Schema

```prisma
model User {
  id    String  @id @default(auto()) @map("_id") @db.ObjectId
  email String  @unique
  name  String?
}
```

### Key Notes

* MongoDB `_id` is mapped to Prisma `id`
* `ObjectId` is auto-generated
* **Do NOT send `id` while creating records**

---

## 🔧 Prisma Commands

```bash
npx prisma init --datasource-provider mongodb
npx prisma db push
npx prisma generate
npx prisma validate
```

### What these do:

* `init` → Initializes Prisma
* `db push` → Syncs schema to MongoDB
* `generate` → Generates Prisma Client
* `validate` → Validates schema

---

## ▶️ Running the Server

```bash
npm run dev
```

Server will start at:

```
http://localhost:3000
```

---

## 🚀 API Endpoints

### Health Check

```http
GET /
```

### Create User

```http
POST /users
Content-Type: application/json

{
  "email": "john@example.com",
  "name": "John"
}
```

### Get All Users

```http
GET /users
```

### Get User by ID

```http
GET /users/:id
```

### Update User

```http
PUT /users/:id
Content-Type: application/json

{
  "name": "Updated Name"
}
```

### Delete User

```http
DELETE /users/:id
```

---

## 🗂 Project Structure

```
.
├── prisma/
│   └── schema.prisma
├── .env
├── index.js
├── package.json
└── README.md
```

---

## ⚠️ Important Notes

* Prisma **v7 does NOT support MongoDB yet**
* Always use **Prisma v6.19** for MongoDB
* Prisma Studio is **not supported** for MongoDB
* Local MongoDB must be a **replica set**

---

## 🧠 Common Errors & Fixes

### ❌ Transactions require replica set

```text
Prisma needs to perform transactions
```

✅ **Fix**: Use MongoDB Atlas or enable replica set locally

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request




