import { Module } from '@nestjs/common';
import { UsersQuizzController } from './users-quizz.controller';
import { UsersQuizzService } from './users-quizz.service';
import { UsersQuizz } from '../entities/UsersQuizz';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UsersQuizz])],
  controllers: [UsersQuizzController],
  providers: [UsersQuizzService]
})
export class UsersQuizzModule {}
