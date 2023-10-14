import { Tcp } from "./Tcp";

import { IService } from "types";
import { DB } from "database";

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
