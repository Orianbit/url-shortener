# 🔗 URL Shortener API

A powerful and production-ready Node.js + MongoDB-based URL shortening service that allows users to:

* 🔗 Create branded short URLs
* ⏳ Set expiration dates
* 📊 Track visit analytics

> ⭐ Built as part of a Backend Developer Internship Task

---

## 🚀 Live Demo

[![Live](https://img.shields.io/badge/Live%20Demo-onrender-green?style=for-the-badge\&logo=render)](https://your-live-demo-link.com)

---

## 📦 Tech Stack

* **Language**: JavaScript (Node.js)
* **Framework**: Express.js
* **Database**: MongoDB (via Mongoose)
* **Utilities**:

  * `nanoid` for generating short codes
  * `express-rate-limit` for rate limiting

---

## 🚀 Features

* 🔗 Shortens long URLs
* 🔁 Redirects short code to the original URL
* ⏳ Supports expiration of URLs via `expiresAt`
* 📊 Tracks number of visits with timestamp
* 🧃 Simple rate limiting (100 req / 15 mins per IP)
* ⚠️ Handles 404, 410, and validation errors

---

## 📁 Project Structure

```
.
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
└── README.md
```

---

## 📬 API Endpoints

### ➕ POST `/url`

**Request Body:**

```json
{
  "url": "https://example.com",
  "expiresAt": "2024-12-31T23:59:59.000Z"
}
```

**Response:**

```json
{
  "id": "abc12345"
}
```

---

### 🔁 GET `/url/:shortUrl`

Redirects to original URL. Returns:

* `302` if valid
* `410` if expired
* `404` if not found

---

### 📊 GET `/url/analytics/:shortUrl`

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

## ⚙️ Setup & Run

### 1. Clone the Repository

```bash
git clone https://github.com/Orianbit/url-shortener.git
cd url-shortener
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file:

```
MONGO_URI=mongodb://localhost:27017/url-shortener
PORT=8001
```

### 4. Start the Server

```bash
npm start
```

Server will be running at: [http://localhost:8001](http://localhost:8001)

---

## 🧪 Testing with Postman

### ➕ POST `/url`

```http
POST http://localhost:8001/url
Content-Type: application/json

{
  "url": "https://example.com"
}
```

### 🔁 GET `/url/:shortUrl`

```http
GET http://localhost:8001/url/abc123
```

### 📊 GET `/url/analytics/:shortUrl`

```http
GET http://localhost:8001/url/analytics/abc123
```

---

## 📊 Bonus Features

* ✅ **Rate Limiting**: 100 requests per 15 minutes
* ✅ **Expiration**: Rejects expired links with `410`
* ✅ **Click Tracking**: `visitHistory` logs every hit

---

## 📌 Sample `.env`

```env
MONGO_URI=mongodb://localhost:27017/url-shortener
PORT=8001
```

---

## 📄 License

MIT

---

## 🙌 Acknowledgements

* [MongoDB](https://www.mongodb.com/)
* [Express.js](https://expressjs.com/)
* [nanoid](https://github.com/ai/nanoid)
* [express-rate-limit](https://www.npmjs.com/package/express-rate-limit)

---

## ✍️ Author

**Astitva (Orianbit)**
🔗 [GitHub Profile](https://github.com/Orianbit)
