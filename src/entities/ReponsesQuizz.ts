import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id_question", ["idQuestion"], {})
@Index("id_reponse", ["idReponse"], {})
@Entity("reponses_quizz", { schema: "vittoria_webcup" })
export class ReponsesQuizz {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "id_user", nullable: true })
  idUser: number | null;

  @Column("int", { name: "id_question", nullable: true })
  idQuestion: number | null;

  @Column("int", { name: "id_reponse", nullable: true })
  idReponse: number | null;
}
