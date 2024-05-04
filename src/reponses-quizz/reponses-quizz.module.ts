import { Module } from '@nestjs/common';
import { ReponsesQuizzService } from './reponses-quizz.service';
import { ReponsesQuizzController } from './reponses-quizz.controller';

@Module({
  providers: [ReponsesQuizzService],
  controllers: [ReponsesQuizzController]
})
export class ReponsesQuizzModule {}
