import { Column, PrimaryGeneratedColumn } from "typeorm";

export enum ItemCategoryTypeEnum {
    'CLOTHING' = 'CLOTHING',
    'FOOD' = 'FOOD',
    'OTHER' = 'OTHER'
}

export class ItemCategory {

    @PrimaryGeneratedColumn({ type: "integer" })
    // @ts-expect-error auto genrated by DB
    id: number;

    @Column({ type: "varchar" })
    name: ItemCategoryTypeEnum;

    constructor(name: ItemCategoryTypeEnum) {
        this.name = name;
    }
}