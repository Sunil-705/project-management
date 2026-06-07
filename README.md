# 🚀 Project Management Platform

A full-stack Project Management Platform that helps teams organize projects, manage tasks, assign work, track progress, and collaborate efficiently.

Built with a modern tech stack including React, Redux Toolkit, Node.js, Express, Prisma, MySQL, Clerk Authentication, and Docker.

---

## 🌐 Live Demo

**Frontend:** https://projecx-manager.vercel.app
**Backend API:** https://project-management-l2jb.onrender.com

---

## ✨ Features

### 🔐 Authentication & Authorization
- Secure user authentication with Clerk
- Sign Up / Sign In functionality
- User session management
- Protected routes

### 📁 Project Management
- Create new projects
- Update project details
- Delete projects
- View all projects
- Project status tracking

### ✅ Task Management
- Create tasks within projects
- Assign tasks to team members
- Update task status
- Track task progress
- Set priorities and deadlines

### 👥 Team Collaboration
- User management
- Role-based access
- Task assignment system
- Real-time project visibility

### 📊 Dashboard
- Project overview
- Task statistics
- Progress monitoring
- Activity tracking

### 🗄️ Database Management
- Prisma ORM integration
- MySQL database
- Efficient relational data handling

### 🐳 Containerization
- Docker support
- Easy local development setup
- Consistent deployment environment

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- Prisma ORM

### Database
- MySQL

### Authentication
- Clerk

### DevOps
- Docker
- Docker Compose

### Deployment
- Vercel

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
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── prisma/
│   ├── config/
│   └── package.json
│
├── docker-compose.yml
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/project-management.git
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
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

## 🐳 Docker Setup (MySQL)

### Start MySQL Container

```bash
docker compose up -d
```

### Verify Container

```bash
docker ps
```

---

## 🗄️ Database Configuration

Create `.env` file inside server directory:

```env
DATABASE_URL="mysql://root:root123@localhost:3306/projectdb"

CLERK_SECRET_KEY=your_secret_key

CLERK_PUBLISHABLE_KEY=your_publishable_key
```

---

## Prisma Setup

Generate Prisma Client:

```bash
npx prisma generate
```

Push Schema:

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
DATABASE_URL=mysql://root:root123@localhost:3306/projectdb
CLERK_SECRET_KEY=your_secret_key
PORT=5000
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
npm run dev
npm start
```

---

## 📸 Screenshots

### Dashboard
(Add Screenshot)

### Project Management
(Add Screenshot)

### Task Board
(Add Screenshot)

### Authentication
(Add Screenshot)

---

## 🔮 Future Enhancements

- Real-time notifications
- Team chat system
- File attachments
- Kanban board
- Calendar integration
- Email notifications
- Analytics dashboard

---

## 🤝 Contributing

Contributions are welcome.

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push branch
5. Create Pull Request

---

## 👨‍💻 Author

Sunil Kumar

GitHub: https: https://github.com/Sunil-705
LinkedIn: https://www.linkedin.com/in/sunil-kumar-aws-devops
