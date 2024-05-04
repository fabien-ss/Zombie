import { Module } from '@nestjs/common';
import { QuizzController } from './quizz.controller';
import { QuizzService } from './quizz.service';
import { Quizz } from '../entities/Quizz';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersChapitreModule } from '../users-chapitre/users-chapitre.module';
import { UsersQuizzModule } from '../users-quizz/users-quizz.module';
import { QuestionsQuizzModule } from '../questions-quizz/questions-quizz.module';

@Module({
  imports: [TypeOrmModule.forFeature([Quizz]), UsersChapitreModule, UsersQuizzModule, QuestionsQuizzModule],
  controllers: [QuizzController],
  providers: [QuizzService]
})
export class QuizzModule {}
