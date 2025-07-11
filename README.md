# 🔗 URL Shortener API (Backend Developer Intern Task)

A Node.js + MongoDB-based URL shortening service that allows users to create short URLs, track visits, and set expiration dates.

---

## ✅ Features Implemented

### Core Features

* Shorten long URLs via `POST /url`
* Redirect using short URL via `GET /url/:shortUrl`
* Stores original URL, short ID, timestamp
* Redirects with proper error handling
* Validates input URL

### Bonus Features

* Expiration logic using optional `expiresAt` field
* Analytics: view visit history and click counts
* Rate limiting with `express-rate-limit`

---

## 📁 Folder Structure

```
├── index.js
├── connect.js
├── model/
│   └── url.js
├── controller/
│   └── url.js
├── route/
│   └── url.js
├── package.json
```

---

## ⚙️ Setup Instructions

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd url-shortener
npm install
```

### 2. MongoDB

Make sure MongoDB is running locally:

```
mongodb://localhost:27017/url-shortener
```

You can also connect with MongoDB Atlas if desired.

### 3. Start the Server

```bash
npm start
```

Server will run at: `http://localhost:8001`

---

## 📬 API Endpoints

### ➕ POST `/url`

Create a short URL

**Body:**

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

### 🔁 GET `/url/:shortUrl`

Redirect to original URL. Returns:

* `302` redirect if valid
* `410` if expired
* `404` if not found

### 📊 GET `/url/analytics/:shortUrl`

Returns usage analytics for a short URL:

```json
{
  "totalClicks": 3,
  "analytics": [{"timestamp": 1720700000000}],
  "createdAt": "...",
  "expiresAt": "...",
  "isExpired": true
}
```

---

## 🔐 Rate Limiting

Limits requests to 100 per 15 minutes per IP using `express-rate-limit`.

---

## 🛡 Error Handling

| Status Code | Meaning               |
| ----------- | --------------------- |
| `400`       | Invalid request body  |
| `404`       | Short URL not found   |
| `410`       | URL has expired       |
| `500`       | Server/internal error |

---

## 💡 Tech Stack

* Node.js
* Express
* MongoDB + Mongoose
* nanoid
* express-rate-limit

---

## ✍️ Author

* \Astitva

---

## 📂 License

MIT

---

> ✅ Ready to deploy. Let me know if you want to add Docker, Swagger docs, or host on Render!
