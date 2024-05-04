import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Users } from '../entities/Users';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from '../jwts/auth.service';
import { JwtStrategy } from '../jwts/JwtStrategy';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [UsersService, AuthService, JwtService],
  controllers: [UsersController],
})
export class UsersModule {}
