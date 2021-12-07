import express from "express";

const app = express();
const PORT = 3000;

app.get("/", function(req, res) {
    res.send("hello dude?");
});

app.listen(PORT, function() {
    console.log("somethings happening");
});