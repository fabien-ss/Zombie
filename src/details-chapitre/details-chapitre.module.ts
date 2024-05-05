import { Module } from '@nestjs/common';
import { DetailsChapitreController } from './details-chapitre.controller';
import { DetailsChapitreService } from './details-chapitre.service';
import { DetailsChapitre } from '../entities/DetailsChapitre';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParagraphesService } from '../paragraphes/paragraphes.service';
import { Paragraphes } from '../entities/Paragraphes';

@Module({
  imports: [TypeOrmModule.forFeature([DetailsChapitre]), TypeOrmModule.forFeature([Paragraphes])],
  controllers: [DetailsChapitreController],
  providers: [DetailsChapitreService, ParagraphesService]
})
export class DetailsChapitreModule {}
