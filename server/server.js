import express from 'express';
import dotenv from "dotenv";
dotenv.config();
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express'
import {sever} from "inngest/express";
import {inngest, functions} from "./inngest/index.js"

const app = express();

app.use(express.json());
app.use(cors())
app.use(clerkMiddleware())

app.get('/', (req, res)=> res.send('Server is live!'))

app.get("/api/inngest", serve({client: inngest, functions}));

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))