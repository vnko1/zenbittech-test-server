import {
  JsonController,
  Get,
  Post,
  Body,
  Param,
} from "routing-controllers";
import { ApiResponse } from "../../../helpers";
import { RealEstateDB } from "database";
import { RealEstateBody } from "./RealEstate.type";

@JsonController("/realEstate")
export default class RealEstate {
  @Get()
  async getAll() {
    const response = await RealEstateDB.findAll({ raw: true });

    return new ApiResponse(true, response);
  }

  @Post()
  async addRealEstate(
    @Body()
    body: RealEstateBody
  ) {
    const response = await RealEstateDB.create(body, {
      returning: false,
    });

    return new ApiResponse(true, response);
  }
}
