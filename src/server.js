/* src/server.js */

import express from "express";
import dotenv from "dotenv";
import generateRoute from "./route/generate.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

// Middleware
app.use(express.json());

app.use("/api/generate", generateRoute)

// Health Check
app.get("/". (req, res) => {
    res.json({ status: "ok", message: "SynthAPI backend end running"});
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});