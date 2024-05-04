import { Module } from '@nestjs/common';
import { UsersChapitreController } from './users-chapitre.controller';
import { UsersChapitreService } from './users-chapitre.service';

@Module({
  controllers: [UsersChapitreController],
  providers: [UsersChapitreService]
})
export class UsersChapitreModule {}
