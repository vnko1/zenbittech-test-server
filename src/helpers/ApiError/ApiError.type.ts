import type { ValidationError } from "class-validator";

export interface IErrorMessage {
  status: number;
  message?: string;
  code?: string;
  errors?: ValidationError[];
}
