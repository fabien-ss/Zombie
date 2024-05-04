import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UsersChapitre } from "./UsersChapitre";
import { DetailsChapitre } from "./DetailsChapitre";
import { Quizz } from "./Quizz";

@Entity("chapitre", { schema: "vittoria_webcup" })
export class Chapitre {
  @PrimaryGeneratedColumn({ type: "int", name: "id_chapitre" })
  idChapitre: number;

  @Column("varchar", { name: "chapitre", nullable: true, length: 255 })
  chapitre: string | null;
}
