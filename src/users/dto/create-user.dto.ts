export class CreateUserDto {

    readonly id?: number;
    readonly name: string;
    readonly ci: string;

    constructor(id: number, name: string, ci:string) {
        this.id = id;
        this.name = name;
        this.ci = ci;
    }
}
