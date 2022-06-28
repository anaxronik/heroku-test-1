const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;

express()
  // .use(express.static(path.join(__dirname, 'public')))
  // .set('views', path.join(__dirname, 'views'))
  // .set('view engine', 'ejs')
  .get("/", (req, res) => res.send(String(Date.now() + `PORT:${PORT}`)))
  .listen(PORT, () => console.log(`Server start on ${PORT}`));
