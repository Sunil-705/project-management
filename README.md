# 🚀 Full Stack Project Management Platform

A modern Project Management Platform that helps teams organize projects, manage tasks, track progress, and collaborate efficiently.

Built with React, Redux Toolkit, Node.js, Express.js, Prisma ORM, Clerk Authentication, PostgreSQL (Neon), Inngest, Docker, and Local Workspace Persistence.

---

## 🌐 Live Demo

**Frontend:** https://project-management-three-red.vercel.app/

**Backend API:** https://projecx-manager.vercel.app

---

## ✨ Features

### 🔐 Authentication & Authorization

* Secure authentication with Clerk
* User registration and login
* Protected routes
* Session management
* User profile synchronization

### 🏢 Workspace Management

* Create multiple workspaces
* Switch between workspaces instantly
* Workspace-specific projects and tasks
* Persistent workspace selection
* Local storage persistence

### 📁 Project Management

* Create and manage projects
* Project status tracking
* Priority management
* Project progress visualization
* Project overview dashboard

### ✅ Task Management

* Create tasks within projects
* Update task details
* Delete tasks
* Task priorities (Low, Medium, High)
* Task status tracking
* Due date management
* Task assignment workflow

### 👥 Team Collaboration

* Workspace members management
* Project member assignment
* Shared project visibility
* Team-based organization

### 📊 Dashboard & Analytics

* Total projects overview
* Completed projects statistics
* Assigned task tracking
* Overdue task monitoring
* Project progress indicators

### 💾 State Persistence

* Redux Toolkit state management
* LocalStorage data persistence
* Workspace persistence across refreshes
* Offline-friendly data handling

### ⚡ Event-Driven Architecture

* Inngest integration
* Clerk user synchronization
* User creation events
* User update events
* User deletion events

### 🗄️ Database Management

* Prisma ORM
* PostgreSQL (Neon)
* Relational schema design
* Optimized database queries

### 🐳 Containerization

* Docker support
* Docker Compose configuration
* Consistent development environment

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Redux Toolkit
* React Router DOM
* Tailwind CSS
* Axios
* Lucide React

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

### State Management

* Redux Toolkit
* LocalStorage

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
│   │   ├── components/
│   │   ├── pages/
│   │   ├── features/
│   │   ├── assets/
│   │   └── store/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── prisma/
│   ├── inngest/
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

### Frontend Setup

```bash
cd client

npm install

npm run dev
```

Frontend:

```bash
http://localhost:5173
```

### Backend Setup

```bash
cd server

npm install

npm run server
```

Backend:

```bash
http://localhost:5000
```

---

## 🐳 Docker Setup

```bash
docker compose up -d
```

Verify:

```bash
docker ps
```

---

## 🗄️ Database Setup

```bash
npx prisma generate

npx prisma db push

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
```

---

## 🚀 Key Highlights

* Multi-workspace support
* Redux Toolkit architecture
* Persistent local storage
* Project & task management
* Team collaboration workflow
* Responsive UI
* Dark mode support
* Docker-ready setup
* Clerk authentication
* PostgreSQL + Prisma integration

---

## 🔮 Future Enhancements

* Real-time notifications
* Team chat system
* File attachments
* Kanban board
* Calendar view
* Email notifications
* Activity timeline
* Advanced analytics

---

## 👨‍💻 Author

**Sunil Kumar**

GitHub: https://github.com/Sunil-705

LinkedIn: https://www.linkedin.com/in/sunil-kumar-aws-devops

---

⭐ If you found this project useful, please consider giving it a star.
