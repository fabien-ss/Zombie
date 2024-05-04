import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id_user", ["idUser"], { unique: true })
@Index("IDX_5f405e01e8ec38ab16c01286c6", ["userMail"], { unique: true })
@Index("user_mail", ["userMail"], { unique: true })
@Entity("users", { schema: "vittoria_rencontre" })
export class Users {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id_user", unsigned: true })
  idUser: string;

  @Column("varchar", { name: "user_name", length: 255 })
  userName: string;

  @Column("varchar", { name: "first_name", length: 255 })
  firstName: string;

  @Column("varchar", { name: "user_password", length: 255 })
  userPassword: string;

  @Column("varchar", {
    name: "user_mail",
    nullable: true,
    unique: true,
    length: 255,
  })
  userMail: string | null;

  @Column("varchar", { name: "source_photo", length: 255 })
  sourcePhoto: string;

  @Column("date", { name: "birth" })
  birth: string;

  @Column("int", { name: "sexe" })
  sexe: number;
}
