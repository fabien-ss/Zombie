import { Module } from '@nestjs/common';
import { ParagraphesController } from './paragraphes.controller';
import { ParagraphesService } from './paragraphes.service';

@Module({
  controllers: [ParagraphesController],
  providers: [ParagraphesService]
})
export class ParagraphesModule {}
