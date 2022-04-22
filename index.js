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

const tweets = [
    {
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	    tweet: "1"
	},
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "2"
	},
    {
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	    tweet: "3"
	},
    {
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	    tweet: "4"
	},
    {
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	    tweet: "5"
	},
    {
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	    tweet: "6"
	},
    {
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	    tweet: "7"
	},
    {
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	    tweet: "8"
	},
    {
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	    tweet: "9"
	},
    {
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	    tweet: "10"
	},
    {
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	    tweet: "11"
	}
];


app.post("/sign-up", (req, res) => {
    const {username, avatar} = req.body;
    users.push({username, avatar});
    res.status(200).json("OK");
});

app.post("/tweets", (req, res) => {
    const {username, tweet} = req.body;
    tweets.push({username, tweet, avatar: searchAvatar(username)});
    res.status(200).json("OK");
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