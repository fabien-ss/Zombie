import { Module } from '@nestjs/common';
import { DetailsStandartController } from './details-standart.controller';
import { DetailsStandartService } from './details-standart.service';

@Module({
  controllers: [DetailsStandartController],
  providers: [DetailsStandartService]
})
export class DetailsStandartModule {}
