import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DetailsChapitre } from "./DetailsChapitre";

@Index("id_details_chapitre", ["idDetailsChapitre"], {})
@Entity("paragraphes", { schema: "vittoria_webcup" })
export class Paragraphes {
  @PrimaryGeneratedColumn({ type: "int", name: "id_paragraphes" })
  idParagraphes: number;

  @Column("int", { name: "id_details_chapitre", nullable: true })
  idDetailsChapitre: number | null;

  @Column("varchar", { name: "paragraphes", nullable: true, length: 255 })
  paragraphes: string | null;

  @ManyToOne(
    () => DetailsChapitre,
    (detailsChapitre) => detailsChapitre.paragraphes,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "id_details_chapitre", referencedColumnName: "idDetailsChapitre" },
  ])
  idDetailsChapitre2: DetailsChapitre;
}
