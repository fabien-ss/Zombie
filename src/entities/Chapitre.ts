import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("chapitre", { schema: "vittoria_webcup" })
export class Chapitre {
  @PrimaryGeneratedColumn({ type: "int", name: "id_chapitre" })
  idChapitre: number;

  @Column("varchar", { name: "chapitre", nullable: true, length: 255 })
  chapitre: string | null;

  @Column("varchar", { name: "image", nullable: true, length: 500 })
  image: string | null;
}
