import express from "express";
import cors from 'cors'
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import { connectDB } from "./lib/db.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";
dotenv.config();
const app = express();

const port = process.env.PORT || 5000;
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true // allow fronend to send cookies
}))
app.use(express.json());

app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use('/api/users',userRoutes);
app.use('/api/chat',chatRoutes)


app.listen(port, () => {
  console.log(`server is running on ${port}`);
  connectDB();
});
