import {
  JsonController,
  Get,
  Post,
  Body,
  Param,
} from "routing-controllers";
import { ApiError, ApiResponse } from "../../../helpers";
import { RealEstateDB } from "database";
import { IRealEstate, RealEstateBody } from "./RealEstate.type";

@JsonController("/realEstate")
export default class RealEstate {
  @Get()
  async getAll() {
    try {
      const response = await RealEstateDB.findAll({ raw: true });

      return new ApiResponse(true, response);
    } catch (error) {
      throw new ApiError(400, {
        code: "SOMETHING_WRONG",
        message: error.message,
      }).toJSON();
    }
  }

  @Post()
  async addRealEstate(
    @Body()
    body: RealEstateBody
  ) {
    try {
      const response = await RealEstateDB.create(body, {
        raw: true,
      });

      return new ApiResponse(
        true,
        JSON.parse(JSON.stringify(response))
      );
    } catch (error) {
      throw new ApiError(400, {
        code: "SOMETHING_WRONG",
        message: error.message,
      }).toJSON();
    }
  }
}
