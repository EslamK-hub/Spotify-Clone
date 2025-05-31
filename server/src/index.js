import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { clerkMiddleware } from "@clerk/express";

import userRoutes from "./routes/user.route.js";
import userRoutes from "./routes/admin.route.js";
import userRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/song.route.js";
import userRoutes from "./routes/album.route.js";
import userRoutes from "./routes/stat.route.js";

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.error(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(clerkMiddleware());

app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/stats", statRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
