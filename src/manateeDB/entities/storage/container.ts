import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('storage_container')
export class Container {
    @PrimaryGeneratedColumn({ type: "integer" })
    // @ts-expect-error auto genrated by DB
    containerId: number

    @Column({ type: "integer" })
    parentContainerId: number

    @Column({ type: "integer" })
    userId: number

    @Column({ type: "boolean" })
    isFixed: boolean

    @Column({ type: "varchar" })
    name: string

    @Column({ type: "varchar" })
    location: string

    constructor(parentContainerId: number, userId: number, isFixed: boolean, name: string, location: string) {
        this.parentContainerId = parentContainerId
        this.userId = userId
        this.isFixed = isFixed
        this.name = name
        this.location = location
    }

}