import { Entity, ObjectIdColumn, Column } from "typeorm";

@Entity("Event")
export class Event {

    @ObjectIdColumn()
    id?: string;

    @Column()
    title?: string;

    @Column()
    description?: string;

    @Column()
    date?: Date;
}