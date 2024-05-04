import { Module } from '@nestjs/common';
import { UsersQuizzController } from './users-quizz.controller';
import { UsersQuizzService } from './users-quizz.service';

@Module({
  controllers: [UsersQuizzController],
  providers: [UsersQuizzService]
})
export class UsersQuizzModule {}
