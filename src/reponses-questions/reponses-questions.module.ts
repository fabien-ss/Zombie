import { Module } from '@nestjs/common';
import { ReponsesQuestionsService } from './reponses-questions.service';
import { ReponsesQuestionsController } from './reponses-questions.controller';

@Module({
  providers: [ReponsesQuestionsService],
  controllers: [ReponsesQuestionsController]
})
export class ReponsesQuestionsModule {}
