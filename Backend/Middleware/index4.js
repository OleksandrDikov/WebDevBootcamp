import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);

app.get("/", (req, res) => {
    res.sendFile("./public/index.html", { root: "." });
})

app.post("/submit", (req, res) => {
  let bandName = req.body.street + req.body.pet;
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

function logger(req, res, next) {
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
  next();
}