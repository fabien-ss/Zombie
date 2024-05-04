import { Module } from '@nestjs/common';
import { QuizzController } from './quizz.controller';
import { QuizzService } from './quizz.service';
import { Quizz } from '../entities/Quizz';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Quizz])],
  controllers: [QuizzController],
  providers: [QuizzService]
})
export class QuizzModule {}
