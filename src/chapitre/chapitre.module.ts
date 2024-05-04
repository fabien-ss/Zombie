import { Module } from '@nestjs/common';
import { ChapitreController } from './chapitre.controller';
import { ChapitreService } from './chapitre.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../entities/Users';
import { Chapitre } from '../entities/Chapitre';

@Module({
  imports: [TypeOrmModule.forFeature([Chapitre])],
  controllers: [ChapitreController],
  providers: [ChapitreService]
})
export class ChapitreModule {}
