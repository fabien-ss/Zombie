import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Quizz } from "./Quizz";

@Index("id_quizz", ["idQuizz"], {})
@Entity("users_quizz", { schema: "vittoria_webcup" })
export class UsersQuizz {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "id_user", nullable: true })
  idUser: number | null;

  @Column("int", { name: "id_quizz", nullable: true })
  idQuizz: number | null;

  @Column("int", { name: "score", nullable: true })
  score: number | null;
/*  
  @ManyToOne(() => Quizz, (quizz) => quizz.usersQuizzes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_quizz", referencedColumnName: "idQuizz" }])
  idQuizz2: Quizz;*/
}