import { Module } from '@nestjs/common';
import { DetailsChapitreController } from './details-chapitre.controller';
import { DetailsChapitreService } from './details-chapitre.service';

@Module({
  controllers: [DetailsChapitreController],
  providers: [DetailsChapitreService]
})
export class DetailsChapitreModule {}
