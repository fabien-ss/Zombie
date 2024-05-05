import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id_chapitre", ["idChapitre"], {})
@Entity("users_chapitre", { schema: "vittoria_webcup" })
export class UsersChapitre {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "id_user", nullable: true })
  idUser: number | null;

  @Column("int", { name: "id_chapitre", nullable: true })
  idChapitre: number | null;
}
