import { Module } from '@nestjs/common';
import { QuestionsQuizzController } from './questions-quizz.controller';
import { QuestionsQuizzService } from './questions-quizz.service';

@Module({
  controllers: [QuestionsQuizzController],
  providers: [QuestionsQuizzService]
})
export class QuestionsQuizzModule {}
