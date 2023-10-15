import type { NextFunction, Request, Response } from "express";
import type { ExpressMiddlewareInterface } from "routing-controllers";
import { validate } from "class-validator";

import { CreateUser } from "DTO";
import { ApiError } from "helpers";

export class ValidateBody implements ExpressMiddlewareInterface {
  async use(
    request: Request,
    _response: Response,
    next: NextFunction
  ) {
    const body: CreateUser = request.body;
    console.log(body);
    const errors = await validate(body);
    console.log(errors);
    if (errors.length)
      throw new ApiError(400, {
        message: "Validation failed",
        code: "USER_VALIDATION_ERROR",
        errors,
      });
    next();
  }
}
