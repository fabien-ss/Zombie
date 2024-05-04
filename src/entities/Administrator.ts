import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id_administrator", ["idAdministrator"], { unique: true })
@Index("uni", ["email"], { unique: true })
@Entity("administrator", { schema: "vittoria_rencontre" })
export class Administrator {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id_administrator",
    unsigned: true,
  })
  idAdministrator: string;

  @Column("varchar", { name: "username", length: 255 })
  username: string;

  @Column("varchar", { name: "email", unique: true, length: 255 })
  email: string;

  @Column("varchar", { name: "first_name", length: 255 })
  firstName: string;

  @Column("varchar", { name: "last_name", length: 255 })
  lastName: string;

  @Column("varchar", { name: "address_location", length: 500 })
  addressLocation: string;

  @Column("varchar", { name: "city", length: 255 })
  city: string;

  @Column("varchar", { name: "country", length: 255 })
  country: string;

  @Column("varchar", { name: "postal_code", length: 255 })
  postalCode: string;

  @Column("varchar", { name: "about", length: 500 })
  about: string;

  @Column("text", { name: "image_url", nullable: true })
  imageUrl: string | null;

  @Column("varchar", { name: "password", nullable: true, length: 255 })
  password: string | null;
}
