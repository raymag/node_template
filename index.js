const express = require("express");
const app = express();

app.use("/static", express.static(__dirname + "/src/assets/"));

app.get("/", (req, res) => {
  res.sendfile("./src/index/index.html");
});

app.listen(3000, () => {
  console.log("Listening on port 3000 :D ");
});