import express, { Express, Request, Response } from "express";

import { connectDB } from "./db";

const PORT = process.env.PORT || 3000;

const app: Express = express();

async function init() {
  await connectDB();

  app
    .get("/", (req: Request, res: Response) =>
      res.send(new Date().toString() + `PORT:${PORT}`)
    )
    .listen(PORT, () => console.log(`Server start on ${PORT}`));
}

init();
