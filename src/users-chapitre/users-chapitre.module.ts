import { Module } from '@nestjs/common';
import { UsersChapitreController } from './users-chapitre.controller';
import { UsersChapitreService } from './users-chapitre.service';
import { UsersChapitre } from '../entities/UsersChapitre';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UsersChapitre])],
  controllers: [UsersChapitreController],
  providers: [UsersChapitreService],
  exports: [UsersChapitreService]
})
export class UsersChapitreModule {}
