import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id_details_chapitre", ["idDetailsChapitre"], {})
@Entity("paragraphes", { schema: "vittoria_webcup" })
export class Paragraphes {
  @PrimaryGeneratedColumn({ type: "int", name: "id_paragraphes" })
  idParagraphes: number;

  @Column("int", { name: "id_details_chapitre", nullable: true })
  idDetailsChapitre: number | null;

  @Column("varchar", { name: "paragraphes", nullable: true, length: 255 })
  paragraphes: string | null;

  @Column("varchar", { name: "url_paragraphes", nullable: true, length: 500 })
  urlParagraphes: string | null;
}
