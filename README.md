# 🔗 URL Shortener API

A powerful, production-ready Node.js + MongoDB-based URL shortening service that allows users to:

* 🔗 Create branded short URLs
* ⏳ Set expiration dates
* 📊 Track visit analytics

> ⭐ Built as part of a Backend Developer Internship Task

---

### ✅ Live Demo Now Shows API Info at Root

Visit [https://url-shortener-nm9j.onrender.com](https://url-shortener-nm9j.onrender.com)  


---

## 📦 Tech Stack

* **Language**: JavaScript (Node.js)
* **Framework**: Express.js
* **Database**: MongoDB Atlas (via Mongoose)
* **Utilities**:

  * `nanoid` for generating short codes
  * `express-rate-limit` for rate limiting
  * `dotenv` for environment configuration

---

## ✅ Features

* 🔗 Shortens long URLs
* 🔁 Redirects short code to the original URL
* ⏳ Supports expiration of URLs via `expiresAt`
* 📊 Tracks number of visits with timestamps
* 🧃 Simple rate limiting (100 req / 15 mins per IP)
* ⚠️ Handles 404, 410, and validation errors
* 🧠 CreatedAt + isExpired response for analytics

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
  "expiresAt": "2025-12-31T23:59:59.000Z" // optional
}
```

**Response:**

```json
{
  "id": "abc12345"
}
```

---

### 🔁 GET `/:shortUrl`

Redirects to original URL. Returns:

* `302` – success
* `410` – expired
* `404` – not found

Example:

```
https://url-shortener-nm9j.onrender.com/abc12345
```

---

### 📊 GET `/url/analytics/:shortUrl`

**Returns:**

```json
{
  "totalClicks": 3,
  "analytics": [
    { "timestamp": 1720700000000 }
  ],
  "createdAt": "2025-07-11T07:53:38.345Z",
  "expiresAt": "2025-12-31T23:59:59.000Z",
  "isExpired": false
}
```

---

## ⚙️ Setup & Run Locally

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

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/url-shortener?retryWrites=true&w=majority
PORT=8001
```

> 💡 Replace `<username>` and `<password>` with your MongoDB Atlas credentials.

### 4. Start the Server

```bash
npm start
```

Local server will run at:
[http://localhost:8001](http://localhost:8001)

---

## 🧪 Testing with Postman

### ➕ Create a short URL

```http
POST https://url-shortener-nm9j.onrender.com/url
Content-Type: application/json

{
  "url": "https://example.com"
}
```

### 🔁 Redirect

Open in browser:

```
https://url-shortener-nm9j.onrender.com/abc12345
```

### 📊 Analytics

```http
GET https://url-shortener-nm9j.onrender.com/url/analytics/abc12345
```

---

## 🔐 Bonus Features

* ✅ **Rate Limiting**: 100 requests per 15 minutes
* ✅ **Expiration**: Links auto-expire with 410 error
* ✅ **Click Tracking**: `visitHistory` logs each visit with timestamp

---

## 📌 Sample `.env`

```env
MONGO_URI=mongodb+srv://<your-user>:<your-pass>@cluster0.mongodb.net/url-shortener?retryWrites=true&w=majority
PORT=10000
```

---

## 📄 License

MIT

---

## 🙌 Acknowledgements

* [MongoDB](https://www.mongodb.com/)
* [Express.js](https://expressjs.com/)
* [nanoid](https://github.com/ai/nanoid)
* [Render](https://render.com)
* [Postman](https://www.postman.com/)

---

## ✍️ Author

**Astitva (Orianbit)**
🔗 [GitHub Profile](https://github.com/Orianbit)
