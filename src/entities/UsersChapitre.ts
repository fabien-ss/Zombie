import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Chapitre } from "./Chapitre";

@Index("id_chapitre", ["idChapitre"], {})
@Entity("USERS_CHAPITRE", { schema: "vittoria_webcup" })
export class UsersChapitre {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "id_user", nullable: true })
  idUser: number | null;

  @Column("int", { name: "id_chapitre", nullable: true })
  idChapitre: number | null;
/*
  @ManyToOne(() => Chapitre, (chapitre) => chapitre.usersChapitres, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_chapitre", referencedColumnName: "idChapitre" }])
  idChapitre2: Chapitre;*/
}
