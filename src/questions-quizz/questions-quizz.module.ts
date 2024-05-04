import { Module } from '@nestjs/common';
import { QuestionsQuizzController } from './questions-quizz.controller';
import { QuestionsQuizzService } from './questions-quizz.service';
import { QuestionsQuizz } from '../entities/QuestionsQuizz';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionsQuizz])],
  controllers: [QuestionsQuizzController],
  providers: [QuestionsQuizzService],
  exports: [QuestionsQuizzService]
})
export class QuestionsQuizzModule {}
