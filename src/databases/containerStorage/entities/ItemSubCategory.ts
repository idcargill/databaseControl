import { PrimaryGeneratedColumn, Column } from "typeorm";


export class ItemSubCategory {
    @PrimaryGeneratedColumn({ type: "integer" })
    // @ts-expect-error auto genrated by DB
    id: number

    @Column({ type: "varchar" })
    name: string

    constructor(name: string) {
        this.name = name;
    }

};