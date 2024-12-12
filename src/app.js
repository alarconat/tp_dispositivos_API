import express from "express";
import authRoutes from "./routes/auth.routes.js";
import usersRoutes from "./routes/users.routes.js";
import examsRoutes from "./routes/exams.routes.js";
import homeworksRoutes from "./routes/homeworks.routes.js";
import homeissuesRoutes from "./routes/homeissues.routes.js";
import purchasesRoutes from "./routes/purchases.routes.js";
import { config } from 'dotenv';

config();

const app = express();


app.use(express.json());

app.use(usersRoutes);
app.use(authRoutes);
app.use(examsRoutes);
app.use(homeworksRoutes);
app.use(homeissuesRoutes);
app.use(purchasesRoutes);

export default app;
