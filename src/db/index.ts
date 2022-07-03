import { sequelize } from "./sequilize";

export async function connectDB() {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
