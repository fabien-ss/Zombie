import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { QuestionsQuizz } from "./QuestionsQuizz";
import { UsersQuizz } from "./UsersQuizz";
import { Chapitre } from "./Chapitre";

@Index("id_chapitre", ["idChapitre"], {})
@Entity("quizz", { schema: "vittoria_webcup" })
export class Quizz {
  @PrimaryGeneratedColumn({ type: "int", name: "id_quizz" })
  idQuizz: number;

  @Column("int", { name: "id_chapitre", nullable: true })
  idChapitre: number | null;

  @Column("int", { name: "point_total", nullable: true })
  pointTotal: number | null;

  @OneToMany(() => QuestionsQuizz, (questionsQuizz) => questionsQuizz.idQuizz2)
  questionsQuizzes: QuestionsQuizz[];

  @OneToMany(() => UsersQuizz, (usersQuizz) => usersQuizz.idQuizz2)
  usersQuizzes: UsersQuizz[];

  @ManyToOne(() => Chapitre, (chapitre) => chapitre.quizzes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_chapitre", referencedColumnName: "idChapitre" }])
  idChapitre2: Chapitre;
}
