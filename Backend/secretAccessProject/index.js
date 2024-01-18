import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const password = "ILoveProgramming";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"));

app.get("/", (req, res) => {
    res.sendFile("./public/index.html", { root: "." });
});

app.post("/check", (req, res) => {
    let userPass = req.body.password;
    if (userPass === password) {
        res.sendFile("./public/secret.html", {root: "."});
    } else {
        // res.sendFile("./public/index.html", {root: "."});
        res.redirect("/");
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
