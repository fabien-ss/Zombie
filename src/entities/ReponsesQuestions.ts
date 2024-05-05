import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id_questions_quizz", ["idQuestionsQuizz"], {})
@Entity("reponses_questions", { schema: "vittoria_webcup" })
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
}
