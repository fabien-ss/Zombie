import { Module } from '@nestjs/common';
import { ReponsesQuestionsService } from './reponses-question.service';
import { ReponsesQuestionsController } from './reponses-question.controller';
import { ReponsesQuestions } from '../entities/ReponsesQuestions';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ReponsesQuestions])],
  providers: [ReponsesQuestionsService],
  controllers: [ReponsesQuestionsController]
})
export class ReponsesQuestionModule {}
