import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column({
        unique: true
    })
    readonly ci: string;

    @Column()
    readonly name: string;

    constructor(id: number, name: string, ci:string) {
        this.id = id;
        this.name = name;
        this.ci = ci;
        console.log('Creo User Entity para ' + this.name);
    }
}
