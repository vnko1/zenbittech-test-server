import "reflect-metadata";
import express from "express";
import { useExpressServer } from "routing-controllers";

import { IService } from "types/services.type";
import { controllers } from "app/domain";
import { middlewares } from "app/middlewares";

export class Tcp implements IService {
  private static instance: Tcp;
  private routePrefix = "/api";

  public server = express();

  constructor() {
    if (!Tcp.instance) Tcp.instance = this;

    return Tcp.instance;
  }

  async init() {
    const { server, routePrefix } = this;

    server.use(express.json());

    useExpressServer(server, {
      routePrefix,
      controllers,
      middlewares,
      cors: true,
      defaultErrorHandler: true,
      validation: false,
    });

    return new Promise<boolean>((resolve) => {
      server.listen(process.env.PORT, async () => {
        console.log(
          "Tcp service started on port" + " " + process.env.PORT
        );

        return resolve(true);
      });
    });
  }
}
