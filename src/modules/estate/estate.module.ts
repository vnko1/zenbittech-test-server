import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { EstateService } from './service/estate.service';
import { Estate } from './models/estate.mode';
import { EstateController } from './controller/estate.controller';

@Module({
  imports: [SequelizeModule.forFeature([Estate])],
  controllers: [EstateController],
  providers: [EstateService],
})
export class EstateModule {}
