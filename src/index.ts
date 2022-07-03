import bodyParser from "body-parser";
import express, { Express, Request, Response } from "express";

import { connectDB } from "./db";
import { User } from "./db/models/User";

const PORT = process.env.PORT || 3000;

const app: Express = express();

app.use(express.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

async function init() {
  await connectDB();

  app
    .get("/users", async (req: Request, res: Response) => {
      const users = await User.findAll();
      return res.send(users);
    })
    .get("/users/:id", async (req: Request, res: Response) => {
      const id = req.params.id;
      const user = await User.findOne({ where: { id } });
      if (user) {
        return res.send(user);
      } else {
        res.status(404).send("Not found");
      }
    })
    .post("/users", async (req: Request, res: Response) => {
      const userName = req?.body?.userName || "unknown";

      const newUser = await User.create({
        username: userName,
        birthday: new Date(),
      });

      return res.send(newUser);
    })
    .listen(PORT, () => console.log(`Server start on ${PORT}`));
}

init();
