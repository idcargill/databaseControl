import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ItemCategoryTypeEnum } from "./ItemCategory";
import { ItemSubCategory } from './ItemSubCategory';

@Entity()
export class Items {
    @PrimaryGeneratedColumn({ type: "integer" })
    // @ts-expect-error auto genrated by DB
    id: number

    @Column({ type: "varchar" })
    name: string

    @Column({ type: "varchar" })
    description: string

    @Column({ type: "varchar" })
    itemCategory: ItemCategoryTypeEnum

    @Column({ type: "varchar", nullable: true })
    itemSubCategory: ItemSubCategory

    @Column({ type: "json", nullable: true })
    attributes: Record<string, string | number | boolean>

    constructor(name: string, description: string, itemCategory: ItemCategoryTypeEnum, ItemSubCategory: ItemSubCategory, attributes: Record<string, any>) {
        this.name = name
        this.description = description
        this.itemCategory = itemCategory
        this.itemSubCategory = ItemSubCategory
        this.attributes = attributes

    }
}