import {
  JsonController,
  Get,
  Post,
  Body,
  Param,
  UseBefore,
} from "routing-controllers";
import { ApiError, ApiResponse } from "helpers";
import { UserDB } from "database";
import { CreateUser } from "DTO";
import { ValidateBody } from "app/middlewares";

@JsonController("/auth")
export default class User {
  @Post("/register")
  @UseBefore(ValidateBody)
  async createUser(@Body() body: CreateUser) {
    try {
      const response = await UserDB.create(body, {
        raw: true,
      });
      return new ApiResponse(true, response);
    } catch (error) {
      throw new ApiError(400, {
        code: "SOMETHING_WRONG",
        message: error.message,
      });
    }
  }
  //   @Get()
  //   async getAll() {
  //     try {
  //       const response = await RealEstateDB.findAll({ raw: true });
  //       return new ApiResponse(true, response);
  //     } catch (error) {
  //       throw new ApiError(400, {
  //         code: "SOMETHING_WRONG",
  //         message: error.message,
  //       }).toJSON();
  //     }
  //   }
  //   @Post()
  //   async addRealEstate(
  //     @Body()
  //     body: RealEstateBody
  //   ) {
  //     try {
  //       const response = await RealEstateDB.create(body, {
  //         raw: true,
  //       });
  //       return new ApiResponse(
  //         true,
  //         JSON.parse(JSON.stringify(response))
  //       );
  //     } catch (error) {
  //       throw new ApiError(400, {
  //         code: "SOMETHING_WRONG",
  //         message: error.message,
  //       }).toJSON();
  //     }
  //   }
}
