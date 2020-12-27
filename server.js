const express = require("express");
const app = express();
const connectDB = require("./config/db");
connectDB();

app.use(express.json({ extended: false }));

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
PORT = 8000;
app.listen(PORT, () => {
  console.log(`api is run on port ${PORT}`);
});
