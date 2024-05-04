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
import { Chapitre } from './entities/Chapitre';
import { DetailsChapitre } from './entities/DetailsChapitre';
import { Paragraphes } from './entities/Paragraphes';
import { QuestionsQuizz } from './entities/QuestionsQuizz';
import { UsersChapitre } from './entities/UsersChapitre';
import { UsersQuizz } from './entities/UsersQuizz';
import { ReponsesQuizzModule } from './reponses-quizz/reponses-quizz.module';
import { ReponsesQuizz } from './entities/ReponsesQuizz';
import { DatabaseModule } from './database/database.module';
import { Quizz } from './entities/Quizz';
import { ReponsesQuestions } from './entities/ReponsesQuestions';

@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: "mysql", // Le type de votre base de données (postgres pour PostgreSQL)
      host: "vittoria.madagascar.webcup.hodi.host", // L'adresse de votre base de données
      port: Number(process.env.DATABASE_PORT), // Le port de votre base de données PostgreSQL par défaut est 5432
      username: "vittoria", // Le nom d'utilisateur de votre base de données
      password: "24Vittoria!", // Le mot de passe de votre base de données
      database:"vittoria_webcup", // Le nom de votre base de données
      entities: [Users, StandartUser,Administrator, Chapitre, DetailsChapitre, Paragraphes, QuestionsQuizz, UsersChapitre, UsersQuizz, ReponsesQuizz, Quizz, ReponsesQuestions],
      synchronize: true, // Mettez à true pour synchroniser automatiquement les entités avec la base de données (utile pour le développement)
      // logging: true,
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
    ReponsesQuizzModule,
    DatabaseModule,
  ],
  controllers: [AppController,],
  providers: [AppService, HandlerGateWay, AuthService, JwtService],
})
export class AppModule { }
