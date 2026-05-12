# 🌿 Full Stack E-Commerce Website

A full-stack web application built using HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, Docker, and Nginx.

The project includes authentication features, contact form handling, REST APIs, and a complete multi-container Docker setup.

---

# 🚀 Features

- User Registration
- User Login
- Contact Form
- REST API Integration
- MongoDB Database
- Dockerized Frontend and Backend
- Nginx Web Server
- Multi-Container Architecture using Docker Compose

---

# 🛠 Tech Stack

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

## DevOps
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

# ⚙️ Prerequisites

Install the following tools before running the project:

- Docker
- Docker Compose

Verify installation:

```bash
docker -v
docker compose version
```

---

# 🐳 Backend Dockerfile

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

```dockerfile
FROM nginx:alpine

COPY . /usr/share/nginx/html

EXPOSE 80
```

---

# 🧱 Docker Compose Configuration

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
      - MONGO_URL=mongodb://mongo:27017/appdb

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

```js
mongoose.connect(
  process.env.MONGO_URL || "mongodb://mongo:27017/appdb"
);
```

---

# ▶️ Build Containers

```bash
docker compose build
```

---

# ▶️ Start Application

```bash
docker compose up
```

Run in detached mode:

```bash
docker compose up -d
```

---

# 🛑 Stop Application

```bash
docker compose down
```

---

# 🧹 Remove Containers and Volumes

```bash
docker compose down -v
```

---

# 📊 Check Running Containers

```bash
docker ps
```

---

# 📜 View Logs

```bash
docker compose logs -f
```

---

# 🌍 Application URLs

| Service | URL |
|---|---|
| Frontend | http://localhost:8080 |
| Backend | http://localhost:5000 |
| MongoDB | mongodb://localhost:27017 |

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/register` | Register User |
| POST | `/login` | Login User |
| POST | `/contact` | Submit Contact Form |

---

# ⚠️ Important Notes

Inside Docker containers, use:

```bash
mongodb://mongo:27017/appdb
```

Do not use:

```bash
mongodb://localhost:27017
```

Docker containers communicate using service names defined in `docker-compose.yml`.

---

# 🔮 Future Improvements

- JWT Authentication
- Password Hashing
- Product Management APIs
- Shopping Cart
- Admin Dashboard
- CI/CD Pipeline
- Cloud Deployment
- Kubernetes Deployment

---

# 📄 License

This project is for learning and educational purposes.
