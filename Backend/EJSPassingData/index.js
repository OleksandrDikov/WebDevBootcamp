import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // let header = "Enter your name:";
  // res.render("index.ejs", {data: header});
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {
  let name = req.body.fName + req.body.lName;
  let header = `There are ${name.length} letters in your name.`;
  res.render("index.ejs", {data: header});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
