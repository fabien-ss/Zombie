import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id_details_standart", ["idDetailsStandart"], { unique: true })
@Entity("details_standart", { schema: "vittoria_rencontre" })
export class DetailsStandart {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id_details_standart",
    unsigned: true,
  })
  idDetailsStandart: string;

  @Column("int", { name: "id_standart", nullable: true })
  idStandart: number | null;

  @Column("int", { name: "min", nullable: true, default: () => "'0'" })
  min: number | null;

  @Column("int", { name: "max", nullable: true, default: () => "'0'" })
  max: number | null;

  @Column("int", { name: "coefficient", nullable: true })
  coefficient: number | null;

  @Column("varchar", { name: "details", length: 255 })
  details: string;
}
