import express from "express";
import cors from "cors";
import chalk from "chalk";

const app = express();
app.use(cors());
app.use(express.json());
app.listen(5000, () => console.log(chalk.bold.green("Server online!")));

const users = [
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
    }
];

const tweets = [];


app.post("/sign-up", (req, res) => {
    const {username, avatar} = req.body;
    users.push({username, avatar});
    res.status(200).json("OK");
});

app.get("/tweets", (req, res) => {
    // console.log(req.data);
    res.status(200).json(tweets)
});