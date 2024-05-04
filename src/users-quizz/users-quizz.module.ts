import { Module } from '@nestjs/common';
import { UsersQuizzController } from './users-quizz.controller';
import { UsersQuizzService } from './users-quizz.service';
import { UsersQuizz } from '../entities/UsersQuizz';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReponsesQuizzModule } from '../reponses-quizz/reponses-quizz.module';

@Module({
  imports: [TypeOrmModule.forFeature([UsersQuizz]), ReponsesQuizzModule],
  controllers: [UsersQuizzController],
  providers: [UsersQuizzService],
  exports: [UsersQuizzService]
})
export class UsersQuizzModule {}
