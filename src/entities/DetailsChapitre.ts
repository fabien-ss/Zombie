import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Chapitre } from "./Chapitre";
import { Paragraphes } from "./Paragraphes";

@Index("id_chapitre", ["idChapitre"], {})
@Entity("details_chapitre", { schema: "vittoria_webcup" })
export class DetailsChapitre {
  @PrimaryGeneratedColumn({ type: "int", name: "id_details_chapitre" })
  idDetailsChapitre: number;

  @Column("int", { name: "id_chapitre", nullable: true })
  idChapitre: number | null;

  @Column("varchar", { name: "titre", nullable: true, length: 255 })
  titre: string | null;

  @Column("varchar", { name: "url_photo", nullable: true, length: 255 })
  urlPhoto: string | null;


}
