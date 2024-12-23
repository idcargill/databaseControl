import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'lists_toDo'})
export class ToDo {
    @PrimaryGeneratedColumn({ type: "integer" })
    // @ts-expect-error auto genrated by DB
    id: number;

    @Column({ type: "integer" })
    userId: number;

    @Column({ type: "varchar" })
    title: string;

    @Column({ type: "varchar" })
    description: string;

    @Column({ type: "boolean" })
    isCompleted: boolean;


    constructor(userId: number, title: string, description: string, isCompleted: boolean) {
        this.userId = userId;
        this.title = title;
        this.description = description;
        this.isCompleted = isCompleted;
    }
}