# 🚀 Full Stack Project Management Platform

A modern full-stack Project Management Platform that enables teams to organize projects, manage tasks, assign work, track progress, and collaborate efficiently.

Built using React, Redux Toolkit, Node.js, Express.js, Prisma ORM, Clerk Authentication, PostgreSQL (Neon), Inngest, and Docker.

---

## 🌐 Live Demo

**Frontend:** https://project-management-three-red.vercel.app/

**Backend API:** https://projecx-manager.vercel.app

---

## ✨ Features

### 🔐 Authentication & Authorization

* Secure authentication using Clerk
* User Sign Up & Sign In
* Session management
* Protected routes
* User profile synchronization

### 📁 Project Management

* Create projects
* Update project details
* Delete projects
* View all projects
* Track project status

### ✅ Task Management

* Create tasks within projects
* Assign tasks to team members
* Update task status
* Set task priorities
* Manage deadlines

### 👥 Team Collaboration

* User management
* Task assignment workflow
* Team-based project organization
* Shared project visibility

### 📊 Dashboard

* Project overview
* Task statistics
* Progress tracking
* Activity monitoring

### ⚡ Event-Driven Architecture

* Inngest integration
* Automatic Clerk user synchronization
* User creation events
* User update events
* User deletion events

### 🗄️ Database Management

* Prisma ORM
* PostgreSQL (Neon)
* Relational data modeling
* Efficient database queries

### 🐳 Containerization

* Docker support
* Local development environment
* Consistent deployment workflow

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Redux Toolkit
* React Router DOM
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* Prisma ORM

### Database

* PostgreSQL (Neon)

### Authentication

* Clerk

### Event Processing

* Inngest

### DevOps

* Docker
* Docker Compose

### Deployment

* Vercel

---

## 📂 Project Structure

```bash
project-management/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── prisma/
│   ├── inngest/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── package.json
│
├── docker-compose.yml
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Sunil-705/project-management.git

cd project-management
```

---

## 📦 Frontend Setup

```bash
cd client

npm install

npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## 🔧 Backend Setup

```bash
cd server

npm install

npm run server
```

Backend runs on:

```bash
http://localhost:5000
```

---

## 🐳 Docker Setup

Start services:

```bash
docker compose up -d
```

Verify containers:

```bash
docker ps
```

---

## 🗄️ Database Setup

Generate Prisma Client:

```bash
npx prisma generate
```

Push Prisma Schema:

```bash
npx prisma db push
```

Open Prisma Studio:

```bash
npx prisma studio
```

---

## 🔐 Environment Variables

### Client (.env)

```env
VITE_CLERK_PUBLISHABLE_KEY=your_publishable_key
VITE_API_URL=http://localhost:5000
```

### Server (.env)

```env
DATABASE_URL=your_database_url

DIRECT_URL=your_direct_database_url

CLERK_SECRET_KEY=your_clerk_secret_key

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

CLERK_WEBHOOK_SECRET=your_webhook_secret

INNGEST_EVENT_KEY=your_inngest_event_key

INNGEST_SIGNING_KEY=your_inngest_signing_key

NODE_ENV=development
```

---

## 🚀 Available Scripts

### Frontend

```bash
npm run dev
npm run build
npm run preview
```

### Backend

```bash
npm run server
npm start
```

---

## 📸 Screenshots

### Dashboard

*Add Screenshot*

### Project Management

*Add Screenshot*

### Task Board

*Add Screenshot*

### Authentication

*Add Screenshot*

---

## 🔮 Future Enhancements

* Real-time notifications
* Team chat system
* File attachments
* Kanban board
* Calendar integration
* Email notifications
* Analytics dashboard

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request

---

## 👨‍💻 Author

**Sunil Kumar**

GitHub: https://github.com/Sunil-705

LinkedIn: https://www.linkedin.com/in/sunil-kumar-aws-devops

---

⭐ If you found this project useful, consider giving it a star.
