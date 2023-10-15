import { Sequelize } from "sequelize";

import { IService } from "types/services.type";

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

export class DB implements IService {
  private static instance: DB;
  static sequelize = new Sequelize(
    `${DB_NAME}`,
    `${DB_USER}`,
    `${DB_PASSWORD}`,
    {
      host: DB_HOST,
      port: 5432,
      dialect: "postgres",
    }
  );

  constructor() {
    if (!DB.instance) DB.instance = this;
    console.log(typeof DB_NAME);
    return DB.instance;
  }

  async init() {
    try {
      await DB.sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.log("Unable to connect to the database:", error);
    }
  }
}
