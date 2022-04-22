import express from "express";
import cors from "cors";
import chalk from "chalk";

const app = express();
app.use(cors());
app.listen(5000);

app.post("/", (req, res) => {
    res.send("oi")
});