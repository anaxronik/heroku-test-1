import { sequelize } from "./sequelize";

export async function connectDB() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
