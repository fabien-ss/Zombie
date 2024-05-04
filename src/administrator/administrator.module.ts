import { Module } from '@nestjs/common';
import { AdministratorService } from './administrator.service';
import { AdministratorController } from './administrator.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Administrator } from '../entities/Administrator';
import { AuthService } from '../jwts/auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
@Module({
  imports: [TypeOrmModule.forFeature([Administrator]),
  JwtModule.register({
    secret: 'your-secret-key', 
    signOptions: { expiresIn: '60m' }, 
  }),],
  providers: [AdministratorService, AuthService, JwtService],
  controllers: [AdministratorController]
})
export class AdministratorModule {}
