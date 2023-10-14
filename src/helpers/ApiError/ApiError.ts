import { HttpError } from "routing-controllers";
// import type { ValidationError } from "class-validator";
import { IErrorMessage } from "./ApiError.type";

export class ApiError extends HttpError {
  protected error: IErrorMessage;
  public removeLog: boolean;

  constructor(status = 500, error: Omit<IErrorMessage, "status">) {
    super(status);

    this.error = {
      ...error,
      status,
      code: error.code || "INTERNAL_ERROR",
    };

    this.name = "ApiError";

    this.message = error.message || "";
  }

  public toJSON = (): IErrorMessage => {
    return this.error;
  };
}
