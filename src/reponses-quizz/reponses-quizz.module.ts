import { Module } from '@nestjs/common';
import { ReponsesQuizzController } from './reponses-quizz.controller';
import { ReponsesQuizzService } from './reponses-quizz.service';
import { ReponsesQuizz } from '../entities/ReponsesQuizz';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionsQuizzModule } from '../questions-quizz/questions-quizz.module';

@Module({
  imports: [TypeOrmModule.forFeature([ReponsesQuizz]), QuestionsQuizzModule],
  controllers: [ReponsesQuizzController],
  providers: [ReponsesQuizzService],
  exports: [ReponsesQuizzService]
})
export class ReponsesQuizzModule {}
