import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("message", { schema: "vittoria_webcup" })
export class Message {
  @Column("timestamp", {
    name: "date_message",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  dateMessage: Date | null;

  @PrimaryGeneratedColumn({ type: "int", name: "id_message" })
  idMessage: number;

  @Column("varchar", { name: "message", nullable: true, length: 255 })
  message: string | null;

  @Column("varchar", { name: "email", length: 250 })
  email: string;
}
