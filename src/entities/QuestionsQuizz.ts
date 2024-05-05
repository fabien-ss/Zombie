import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

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

  @Column("varchar", {
    name: "description_exercice",
    nullable: true,
    length: 255,
  })
  descriptionExercice: string | null;
}
