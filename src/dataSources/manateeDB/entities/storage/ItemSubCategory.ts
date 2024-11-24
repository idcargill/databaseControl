import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity('storage_item_sub_category')
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