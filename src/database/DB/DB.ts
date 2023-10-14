import { Sequelize } from "sequelize";

import { IService } from "types/services.type";

// const {
//   POSTGRES_DATABASE,
//   POSTGRES_USER,
//   POSTGRES_PASSWORD,
//   POSTGRES_HOST,
//   POSTGRES_PORT,
// } = process.env;

export class DB {
  private static instance: DB;
  private sequelize = new Sequelize("zenDb", "admin", "admin", {
    host: "http://localhost:",
    port: 5432,
    dialect: "postgres",
  });

  constructor() {
    if (!DB.instance) DB.instance = this;

    return DB.instance;
  }

  async init() {
    try {
      await this.sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.log("Unable to connect to the database:", error);
    }
  }
}
