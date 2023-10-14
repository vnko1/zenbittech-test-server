import {
  JsonController,
  Get,
  Post,
  Body,
  Param,
} from "routing-controllers";
import { ApiResponse } from "../../../helpers";

@JsonController("/realEstate")
export default class RealEstate {
  @Get()
  async getAll() {
    return new ApiResponse(true, "Hello");
  }
}
