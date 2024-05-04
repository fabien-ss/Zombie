import { Module } from '@nestjs/common';
import { StandartUserController } from './standart-user.controller';
import { StandartUserService } from './standart-user.service';
import { StandartUser } from 'src/entities/StandartUser';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([StandartUser])],
  controllers: [StandartUserController],
  providers: [StandartUserService]
})
export class StandartUserModule {}
