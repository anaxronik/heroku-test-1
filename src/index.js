const express = require("express");
const connectDB = require("./db");
const app = express();

const PORT = process.env.PORT || 3000;

async function init() {
  await connectDB();

  express()
    .get("/", (req, res) => res.send(new Date().toString() + `PORT:${PORT}`))
    .listen(PORT, () => console.log(`Server start on ${PORT}`));
}

init();
