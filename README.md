# 🌿 Skincare Website - Full Stack Dockerized Project

A full-stack skincare website built using **HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, Docker, and Nginx**.

This project includes:

- User Registration
- User Login
- Contact Form
- MongoDB Database
- Dockerized Frontend & Backend
- Nginx Web Server
- Docker Compose Setup

---

# 📌 Tech Stack

## Frontend
- HTML
- CSS
- JavaScript
- Nginx

## Backend
- Node.js
- Express.js

## Database
- MongoDB
- Mongoose

## DevOps / Deployment
- Docker
- Docker Compose

---

# 📂 Project Structure

```bash
project/
│
├── frontend/
│   ├── Dockerfile
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── images/
│
├── backend/
│   ├── Dockerfile
│   ├── server.js
│   ├── package.json
│   ├── models/
│   └── routes/
│
├── docker-compose.yml
│
└── README.md
```

---

# 🚀 Features

- ✅ User Registration
- ✅ User Login
- ✅ Contact Form
- ✅ MongoDB Database Integration
- ✅ REST API Backend
- ✅ Dockerized Application
- ✅ Nginx Frontend Hosting
- ✅ Multi-Container Setup

---

# ⚙️ Prerequisites

Make sure these tools are installed:

- Docker
- Docker Compose

Check installation:

```bash
docker -v
docker compose version
```

---

# 🐳 Backend Dockerfile

Location:

```bash
backend/Dockerfile
```

```dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "server.js"]
```

---

# 🌐 Frontend Dockerfile

Location:

```bash
frontend/Dockerfile
```

```dockerfile
FROM nginx:alpine

COPY . /usr/share/nginx/html

EXPOSE 80
```

---

# 🧱 Docker Compose Configuration

Location:

```bash
docker-compose.yml
```

```yaml
version: "3.8"

services:

  backend:
    build: ./backend
    ports:
      - "5000:5000"
    depends_on:
      - mongo
    environment:
      - MONGO_URL=mongodb://mongo:27017/skincare

  frontend:
    build: ./frontend
    ports:
      - "8080:80"

  mongo:
    image: mongo
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
```

---

# 🔗 MongoDB Connection

Update MongoDB connection in backend:

```js
mongoose.connect(
  process.env.MONGO_URL || "mongodb://mongodb:27017/skincare"
);
```

---

# ▶️ Build Docker Containers

Run from project root directory:

```bash
docker compose build
```

---

# ▶️ Start Containers

```bash
docker compose up
```

Run in background:

```bash
docker compose up -d
```

---

# 🛑 Stop Containers

```bash
docker compose down
```

---

# 🧹 Remove Containers + Volumes

```bash
docker compose down -v
```

---

# 📊 Check Running Containers

```bash
docker ps
```

---

# 🌍 Application URLs

| Service | URL |
|---|---|
| Frontend | http://localhost:80 |
| Backend | http://localhost:5000 |
| MongoDB | mongodb://localhost:27017 |

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/register` | Register User |
| POST | `/login` | Login User |
| POST | `/contact` | Save Contact Form |

---

# ⚠️ Important Notes

## MongoDB Atlas Replaced

This project uses a **MongoDB Docker Container** instead of MongoDB Atlas.

### Correct MongoDB URL

```bash
mongodb://mongo:27017/skincare
```

### Wrong MongoDB URL Inside Docker

```bash
mongodb://localhost:27017
```

Reason:

- `mongo` = Docker service name
- Docker containers communicate using service names

---

# 🛠 Future Improvements

- JWT Authentication
- bcrypt Password Hashing
- Product APIs
- Cart System
- Admin Dashboard
- AWS EC2 Deployment
- CI/CD Pipeline
- Kubernetes Deployment

---

# 👨‍💻 Author

**Ramandeep Kaur**

---

# 📄 License

This project is created for learning and educational purposes.
