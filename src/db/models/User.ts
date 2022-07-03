import { DataTypes, Model } from "sequelize";

import { sequelize } from "../sequelize";

export class User extends Model {}
User.init(
  {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
  },
  { sequelize, modelName: "user" }
);
