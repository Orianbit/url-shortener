# 🔗 URL Shortener API (Backend Developer Intern Task)

A powerful and production-ready Node.js + MongoDB-based URL shortening service that allows users to:

* 🔗 Create branded short URLs
* ⏳ Set expiration dates
* 📊 Track visit analytics

> ⭐ Built as part of a Backend Developer Internship Task

---

## 🚀 Live Demo

👉 [Live URL Shortener Demo](https://your-live-demo-link.com) *(Replace with deployed link or leave this section commented if not yet hosted)*

---

## ✅ Features Implemented

### Core Features

* 🔗 Shorten long URLs via `POST /url`
* 🚀 Redirect using short URL via `GET /url/:shortUrl`
* 🧠 Stores original URL, short ID, timestamps
* 🛡 Validates input and handles invalid or missing URLs
* ⚠️ Redirects with proper status codes (`302`, `404`, `410`)

### Bonus Features ✅

* ⏳ Expiration logic using optional `expiresAt` field
* 📊 Visit analytics: track clicks & timestamps
* 🧃 Rate limiting with `express-rate-limit` (100 requests / 15 min per IP)

---

## 📁 Folder Structure

```
├── index.js               # App entry point
├── connect.js             # MongoDB connection setup
├── model/
│   └── url.js             # Mongoose schema
├── controller/
│   └── url.js             # Business logic
├── route/
│   └── url.js             # Express routes
├── .env.example           # Sample environment config
├── .gitignore             # Git ignore rules
├── package.json           # Project config & dependencies
```

---

## ⚙️ Setup Instructions

### 1. Clone and Install

```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
npm install
```

### 2. Configure Environment

Create a `.env` file:

```env
MONGO_URI=mongodb://localhost:27017/url-shortener
PORT=8001
```

### 3. Run MongoDB

Ensure MongoDB is running locally, or use MongoDB Atlas.

### 4. Start the Server

```bash
npm start
```

Server will be running at: [http://localhost:8001](http://localhost:8001)

---

## 📬 API Endpoints

### ➕ `POST /url`

Create a short URL.

**Request Body:**

```json
{
  "url": "https://example.com",
  "expiresAt": "2024-12-31T23:59:59.000Z" // optional
}
```

**Response:**

```json
{
  "id": "abc12345"
}
```

---

### 🔁 `GET /url/:shortUrl`

Redirect to the original URL.

**Returns:**

* `302` if valid
* `410` if expired
* `404` if not found

---

### 📊 `GET /url/analytics/:shortUrl`

Get usage statistics for a short URL.

**Response:**

```json
{
  "totalClicks": 3,
  "analytics": [
    { "timestamp": 1720700000000 }
  ],
  "createdAt": "...",
  "expiresAt": "...",
  "isExpired": true
}
```

---

## 🔐 Rate Limiting

Protects your API with:

* ⏱ 100 requests per 15 minutes per IP
* 🚫 Blocks abuse and keeps the app performant

---

## 🛡 Error Handling

| Status Code | Meaning               |
| ----------- | --------------------- |
| `400`       | Invalid request body  |
| `404`       | Short URL not found   |
| `410`       | URL has expired       |
| `500`       | Internal server error |

---

## 💡 Tech Stack

* ⚙️ Node.js
* 🚀 Express.js
* 🗃 MongoDB + Mongoose
* 🔐 nanoid (unique ID generation)
* 🧃 express-rate-limit

---

## 🤝 Acknowledgements

* MongoDB documentation
* Express.js official docs

---

## ✍️ Author

* [Astitva (Orianbit)](https://github.com/Orianbit)

---

## 📂 License

[MIT](LICENSE)

