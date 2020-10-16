import express from "express";
import basicAuth from "./utils/basicAuth.js";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "http://localhost:8080",
  })
);
app.use(basicAuth);

app.get("/public", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "Public route succesfully reached!",
  });
});

app.get("/private", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "Private route succesfully reached!",
    user: req.user,
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
