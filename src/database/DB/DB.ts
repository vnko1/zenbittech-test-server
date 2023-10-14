import { Sequelize } from "sequelize";

import { IService } from "types/services.type";

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const dbName = DB_NAME ?? "postgres";
const dbUser = DB_USER ?? "postgres";
const dbPass = DB_PASSWORD ?? "postgres";
const dbHost = DB_HOST ?? "localhost";

export class DB implements IService {
  private static instance: DB;
  private sequelize = new Sequelize(dbName, dbUser, dbPass, {
    host: dbHost,
    port: 5432,
    dialect: "postgres",
  });

  constructor() {
    if (!DB.instance) DB.instance = this;
    console.log(typeof DB_NAME);
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
