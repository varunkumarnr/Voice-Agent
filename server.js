const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("server message");
});
PORT = 3000;
app.listen(PORT, () => {
  console.log(`api is run on port ${PORT}`);
});
