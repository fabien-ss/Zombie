import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id_chapitre", ["idChapitre"], {})
@Entity("quizz", { schema: "vittoria_webcup" })
export class Quizz {
  @PrimaryGeneratedColumn({ type: "int", name: "id_quizz" })
  idQuizz: number;

  @Column("int", { name: "id_chapitre", nullable: true })
  idChapitre: number | null;

  @Column("int", { name: "point_total", nullable: true })
  pointTotal: number | null;
}
