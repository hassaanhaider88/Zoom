import express from "express";
import { createServer } from "node:http";
import dotenv from "dotenv";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";
import { CheckMeetingExists } from "./controllers/Meeting.controller.js";

dotenv.config();
const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

app.post("/api/v1/meetings/check", CheckMeetingExists);

app.get("/", (req, res) => {
  res.send("API IS WORKING");
});

const start = async () => {
  app.set("mongo_user");
  const connectionDb = await mongoose.connect(
    "mongodb://localhost:27017/zoom-clone"
  );

  console.log(`MONGO Connected DB HOst: ${connectionDb.connection.host}`);
  server.listen(process.env.PORT || 8000, () => {
    console.log("LISTENIN ON PORT, ", process.env.PORT || 8000);
  });
};

start();
