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
import { ReponsesQuizz } from "./ReponsesQuizz";

@Index("id_questions_quizz", ["idQuestionsQuizz"], {})
@Entity("REPONSES_QUESTIONS", { schema: "vittoria_webcup" })
export class ReponsesQuestions {
  @PrimaryGeneratedColumn({ type: "int", name: "id_reponses_questions" })
  idReponsesQuestions: number;

  @Column("int", { name: "id_questions_quizz", nullable: true })
  idQuestionsQuizz: number | null;

  @Column("varchar", { name: "reponses", nullable: true, length: 255 })
  reponses: string | null;

  @Column("tinyint", {
    name: "est_vraie",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  estVraie: boolean | null;

  @ManyToOne(
    () => QuestionsQuizz,
    (questionsQuizz) => questionsQuizz.reponsesQuestions,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "id_questions_quizz", referencedColumnName: "idQuestionsQuizz" },
  ])
  idQuestionsQuizz2: QuestionsQuizz;

  @OneToMany(() => ReponsesQuizz, (reponsesQuizz) => reponsesQuizz.idReponse2)
  reponsesQuizzes: ReponsesQuizz[];
}
