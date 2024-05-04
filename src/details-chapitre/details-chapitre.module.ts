import { Module } from '@nestjs/common';
import { DetailsChapitreController } from './details-chapitre.controller';
import { DetailsChapitreService } from './details-chapitre.service';
import { DetailsChapitre } from '../entities/DetailsChapitre';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DetailsChapitre])],
  controllers: [DetailsChapitreController],
  providers: [DetailsChapitreService]
})
export class DetailsChapitreModule {}
