import { IsEmail, Length } from "class-validator";
import { IUser } from "types";

export class CreateUser implements Omit<IUser, "uid"> {
  @IsEmail()
  email: string;

  @Length(7, 30)
  password: string;
}
