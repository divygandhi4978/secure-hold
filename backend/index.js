const express = require("express");
const app = express();
const port = 3000;
const crud = require("./Routes/crud");
const Auth = require("./Routes/Auth");
const logs = require("./Routes/logs");
const d = require("./Connection/Conn");

//Connecting App with db
d();

// Crud Operations
app.use("/crud", crud);
app.use("/auth", Auth);
app.use("/logs", logs);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
