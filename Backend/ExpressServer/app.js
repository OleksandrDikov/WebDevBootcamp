import express from 'express';

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // res.send("Hello World!")
    console.log(req.rawHeaders);
    res.sendFile('wiki.html', { root: '.' });
}) 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})