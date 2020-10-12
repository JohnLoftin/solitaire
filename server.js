const express = require("express");
const app = express();

app.use(express.static(__dirname + "/"));

app.listen(3001, () => {
  console.log(`The server at port 3001 is listening.`);
});
