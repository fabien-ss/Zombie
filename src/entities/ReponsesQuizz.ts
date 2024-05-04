import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { QuestionsQuizz } from "./QuestionsQuizz";
import { ReponsesQuestions } from "./ReponsesQuestions";

@Index("id_question", ["idQuestion"], {})
@Index("id_reponse", ["idReponse"], {})
@Entity("REPONSES_QUIZZ", { schema: "vittoria_webcup" })
export class ReponsesQuizz {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "id_user", nullable: true })
  idUser: number | null;

  @Column("int", { name: "id_question", nullable: true })
  idQuestion: number | null;

  @Column("int", { name: "id_reponse", nullable: true })
  idReponse: number | null;

  @ManyToOne(
    () => QuestionsQuizz,
    (questionsQuizz) => questionsQuizz.reponsesQuizzes,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "id_question", referencedColumnName: "idQuestionsQuizz" },
  ])
  idQuestion2: QuestionsQuizz;

  @ManyToOne(
    () => ReponsesQuestions,
    (reponsesQuestions) => reponsesQuestions.reponsesQuizzes,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "id_reponse", referencedColumnName: "idReponsesQuestions" },
  ])
  idReponse2: ReponsesQuestions;
}
