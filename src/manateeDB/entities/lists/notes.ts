import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'lists_notes'})
export class Note {
    @PrimaryGeneratedColumn({ type: "integer" })
    // @ts-expect-error auto genrated by DB
    id: number;

    @Column({ type: "integer" })
    userId: number;

    @Column({ type: "varchar" })
    title: string;

    @Column({ type: "varchar" })
    description: string;


    constructor(userId: number, title: string, description: string) {
        this.userId = userId;
        this.title = title;
        this.description = description;
    }
}