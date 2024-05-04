import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploaderModule } from './uploader/uploader.module';
import { ReplicateModule } from './replicate/replicate.module';
import { HandlerGateWay } from './socket/handler.gateway';
import { BrainShopModule } from './brain-shop/brain-shop.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StandartModule } from './standart/standart.module';
import { UsersModule } from './users/users.module';
import { DetailsStandartModule } from './details-standart/details-standart.module';
import { StandartUserModule } from './standart-user/standart-user.module';
import { Users } from './entities/Users';
import { Standart } from './entities/Standart';
import { StandartUser } from './entities/StandartUser';
import { DetailsStandart } from './entities/DetailsStandart';
import { ServerModule } from './server/server.module';
import { AdministratorModule } from './administrator/administrator.module';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './jwts/auth.service';
import { JwtService } from '@nestjs/jwt';
import { Administrator } from './entities/Administrator';

@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: "postgres", // Le type de votre base de données (postgres pour PostgreSQL)
      host: "localhost",//"vittoria.madagascar.webcup.hodi.host", // L'adresse de votre base de données
      port: 5432,//Number(process.env.DATABASE_PORT), // Le port de votre base de données PostgreSQL par défaut est 5432
      username: "your_username",//"vittoria", // Le nom d'utilisateur de votre base de données
      password: "your_password",//"24Vittoria!", // Le mot de passe de votre base de données
      database:"test", //"vittoria_rencontre", // Le nom de votre base de données
      entities: [Users, Standart, StandartUser, DetailsStandart, Administrator],
      synchronize: true, // Mettez à true pour synchroniser automatiquement les entités avec la base de données (utile pour le développement)
    }),

    UploaderModule, ReplicateModule, BrainShopModule, StandartModule, UsersModule, DetailsStandartModule, StandartUserModule, ServerModule, AdministratorModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [AppController,],
  providers: [AppService, HandlerGateWay, AuthService, JwtService],
})
export class AppModule { }
