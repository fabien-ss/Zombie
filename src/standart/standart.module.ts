import { Module } from '@nestjs/common';
import { StandartController } from './standart.controller';
import { StandartService } from './standart.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Standart } from '../entities/Standart';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from '../jwts/auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([Standart])],
  controllers: [StandartController],
  providers: [StandartService]
})
export class StandartModule {}
