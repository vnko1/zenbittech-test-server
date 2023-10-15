import type { NextFunction, Request, Response } from "express";
import { ApiError } from "helpers";
import type { ExpressMiddlewareInterface } from "routing-controllers";
import { Middleware } from "routing-controllers";

@Middleware({ type: "after" })
export class NotFound implements ExpressMiddlewareInterface {
  use(request: Request, _response: Response, next: NextFunction) {
    _response.status(404).json({ message: "NOT FOUND" });
  }
}
