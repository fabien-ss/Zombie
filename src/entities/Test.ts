import { Column, Entity } from "typeorm";

@Entity("test", { schema: "vittoria_rencontre" })
export class Test {
  @Column("varchar", { name: "id", nullable: true, length: 20 })
  id: string | null;
}
