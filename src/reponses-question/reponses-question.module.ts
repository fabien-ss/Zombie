import { Module } from '@nestjs/common';
import { ReponsesQuestionService } from './reponses-question.service';
import { ReponsesQuestionController } from './reponses-question.controller';

@Module({
  providers: [ReponsesQuestionService],
  controllers: [ReponsesQuestionController]
})
export class ReponsesQuestionModule {}
