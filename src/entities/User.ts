import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: "int" })
  // @ts-expect-error auto genrated by DB
  id: number;

  @Column({ type: "varchar", nullable: true })
  firstName: string;

  @Column({ type: "varchar", nullable: true })
  lastName: string | null;

  @Column({ type: "varchar", nullable: true, unique: true }) // hash?
  email: string | null;
  

  constructor(
    firstName: string,
    lastName?: string | null,
    email?: string | null,
  ) {
    this.firstName = firstName;
    this.lastName = lastName ? lastName : null;
    this.email = email ? email : null;
  }
}
