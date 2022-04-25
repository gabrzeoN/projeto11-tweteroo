import express from "express";
import cors from "cors";
import chalk from "chalk";

const app = express();
app.use(cors());
app.use(express.json());
app.listen(5000, () => console.log(chalk.bold.green("Server online!")));

const users = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
    const {username, avatar} = req.body;
    if(username && avatar){
		users.push({username, avatar});
		res.status(201).json("OK");
	}else{
		res.sendStatus(400);
	}
});

app.post("/tweets", (req, res) => {
    const {username, tweet} = req.body;
	if(username && tweet){
		tweets.push({username, tweet, avatar: searchAvatar(username)});
		res.status(201).json("OK");
	}else{
		res.sendStatus(400);
	}
});

app.get("/tweets", (req, res) => {
    res.status(200).json(latestTweets(tweets));
});

function searchAvatar(username){
    const user = users.find(user => user.username === username);
    return user.avatar;
}

function latestTweets(tweets){
    const tweetsReverse = [...tweets].reverse();
    const latestTen = [];
    for(let i = 0; (i < 10 && i < tweetsReverse.length); i++){
        latestTen.push(tweetsReverse[i]);
    }
    return latestTen;
}