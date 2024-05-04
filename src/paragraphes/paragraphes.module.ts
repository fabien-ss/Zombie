import { Module } from '@nestjs/common';
import { ParagraphesController } from './paragraphes.controller';
import { ParagraphesService } from './paragraphes.service';
import { Paragraphes } from '../entities/Paragraphes';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Paragraphes])],
  controllers: [ParagraphesController],
  providers: [ParagraphesService]
})
export class ParagraphesModule {}
