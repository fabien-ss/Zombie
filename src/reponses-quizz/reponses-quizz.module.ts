import { Module } from '@nestjs/common';
import { ReponsesQuizzController } from './reponses-quizz.controller';
import { ReponsesQuizzService } from './reponses-quizz.service';
import { ReponsesQuizz } from '../entities/ReponsesQuizz';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ReponsesQuizz])],
  controllers: [ReponsesQuizzController],
  providers: [ReponsesQuizzService]
})
export class ReponsesQuizzModule {}
