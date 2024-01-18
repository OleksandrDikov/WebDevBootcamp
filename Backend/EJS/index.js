import express from "express";
import morgan from "morgan";
import ejs from "ejs";

const app = express();
const d = new Date();
const port = 3000;
let day = d.getDay();
let message;

app.set('view engine', 'ejs');
app.use(morgan("combined"));

app.get("/", (req, res) => {
    if (day === 0 || day === 6) {
        message = "Hey! It's the weekend, it's time to have fun!";
    } else {
        message = "Hey! It's a weekday, it's time to hard work!";
    }
    res.render("index.ejs", {message});
});

app.listen(port, () => {
    console.log(`App running on port ${port}!`);
});
