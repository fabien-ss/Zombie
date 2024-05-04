import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Quizz } from "./Quizz";
import { ReponsesQuestions } from "./ReponsesQuestions";
import { ReponsesQuizz } from "./ReponsesQuizz";

@Index("id_quizz", ["idQuizz"], {})
@Entity("questions_quizz", { schema: "vittoria_webcup" })
export class QuestionsQuizz {
  @PrimaryGeneratedColumn({ type: "int", name: "id_questions_quizz" })
  idQuestionsQuizz: number;

  @Column("int", { name: "id_quizz", nullable: true })
  idQuizz: number | null;

  @Column("varchar", { name: "questions", nullable: true, length: 255 })
  questions: string | null;

  @Column("tinyint", { name: "est_difficile", nullable: true, width: 1 })
  estDifficile: boolean | null;

  @Column("varchar", { name: "audio", nullable: true, length: 255 })
  audio: string | null;

  @Column("varchar", { name: "url_photo", nullable: true, length: 255 })
  urlPhoto: string | null;

  @Column("tinyint", {
    name: "est_exercice_humain",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  estExerciceHumain: boolean | null;
/*
  @ManyToOne(() => Quizz, (quizz) => quizz.questionsQuizzes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_quizz", referencedColumnName: "idQuizz" }])
  idQuizz2: Quizz;

  @OneToMany(
    () => ReponsesQuestions,
    (reponsesQuestions) => reponsesQuestions.idQuestionsQuizz2
  )
  reponsesQuestions: ReponsesQuestions[];

  @OneToMany(() => ReponsesQuizz, (reponsesQuizz) => reponsesQuizz.idQuestion2)
  reponsesQuizzes: ReponsesQuizz[];*/
}
