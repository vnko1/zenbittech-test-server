import { Sequelize } from "sequelize";
import { Tcp } from "./Tcp";

import { IService } from "types/services.type";
import { DB } from "database/DB/DB";

export class App implements IService {
  private static instance: App;
  private tcp: IService = new Tcp();
  private db = new DB();

  constructor() {
    if (!App.instance) App.instance = this;

    return App.instance;
  }

  async init() {
    const { tcp } = this;
    console.log("App started");

    await tcp.init();
    await this.db.init();
    return true;
  }
}
