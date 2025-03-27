import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/sequelize';
import { Estate } from '../models/estate.mode';
import { AddEstateDto } from '../dto/addEstate.dto';
import { AppService } from 'src/common';

@Injectable()
export class EstateService extends AppService {
  constructor(
    @InjectModel(Estate)
    private estateModel: typeof Estate,
  ) {
    super();
  }

  getAllEstates() {
    return this.estateModel.findAll({ raw: true });
  }

  addEstate(addEstateDto: AddEstateDto) {
    return this.estateModel.create(addEstateDto, { raw: true });
  }
}
