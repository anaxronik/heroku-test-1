const sequelize = require("./sequilize");

async function connectDB() {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
