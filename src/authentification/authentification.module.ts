import { Module } from '@nestjs/common';
import { AuthentificationService } from './authentification.service';
import { AuthentificationController } from './authentification.controller';
import { UsersService } from '../users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../entities/Users';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [AuthentificationService],
  controllers: [AuthentificationController]
})
export class AuthentificationModule {}
