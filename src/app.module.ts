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
import { ChapitreModule } from './chapitre/chapitre.module';
import { DetailsChapitreModule } from './details-chapitre/details-chapitre.module';
import { ParagraphesModule } from './paragraphes/paragraphes.module';
import { QuestionsQuizzModule } from './questions-quizz/questions-quizz.module';
import { QuizzModule } from './quizz/quizz.module';
import { ReponsesQuestionModule } from './reponses-question/reponses-question.module';

import { UsersChapitreModule } from './users-chapitre/users-chapitre.module';
import { UsersQuizzModule } from './users-quizz/users-quizz.module';

@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: "mysql", // Le type de votre base de données (postgres pour PostgreSQL)
      host: "vittoria.madagascar.webcup.hodi.host", // L'adresse de votre base de données
      port: Number(process.env.DATABASE_PORT), // Le port de votre base de données PostgreSQL par défaut est 5432
      username: "vittoria", // Le nom d'utilisateur de votre base de données
      password: "24Vittoria!", // Le mot de passe de votre base de données
      database:"vittoria_webcup", // Le nom de votre base de données
      entities: [Users, Standart, StandartUser, DetailsStandart, Administrator],
      synchronize: true, // Mettez à true pour synchroniser automatiquement les entités avec la base de données (utile pour le développement)
    }),

    UploaderModule, ReplicateModule, BrainShopModule, StandartModule, UsersModule, DetailsStandartModule, StandartUserModule, ServerModule, AdministratorModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    ChapitreModule,
    DetailsChapitreModule,
    ParagraphesModule,
    QuestionsQuizzModule,
    QuizzModule,
    ReponsesQuestionModule,
    UsersChapitreModule,
    UsersQuizzModule,
  ],
  controllers: [AppController,],
  providers: [AppService, HandlerGateWay, AuthService, JwtService],
})
export class AppModule { }
