import { Body, Controller, Get, Post } from '@nestjs/common';

import { EstateService } from '../service/estate.service';
import { ZodValidationPipe } from '../pipes/zodValidation.pipe';
import { AddEstateDto, addEstateSchema } from '../dto/addEstate.dto';

@Controller('estate')
export class EstateController {
  constructor(private estateService: EstateService) {}
  @Get()
  async getEstates() {
    return await this.estateService.getAllEstates();
  }

  @Post()
  async addEstate(
    @Body(new ZodValidationPipe(addEstateSchema)) addEstateDto: AddEstateDto,
  ) {
    return await this.estateService.addEstate(addEstateDto);
  }
}
