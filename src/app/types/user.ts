export class User {
    private id : number;
    private name : string;
    private surname : string;
    private email : string;
    private password : string;

    constructor(id: number,
        name: string,
        surname: string,
        email: string,
        password: string,
    ){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
    }

    get Id(): number {
        return this.id;
    }

    get Name(): string {
        return this.name;
    }
    
    set Name(new_name: string) {
        this.name = new_name;
    }

    get Surname(): string {
        return this.surname;
    }
    
    set Surname(new_surname: string) {
        this.surname = new_surname;
    }

    get Email(): string {
        return this.email;
    }
    
    set Email(new_email: string) {
        this.email = new_email;
    }

    get Password(): string {
        return this.password;
    }
    
    set Password(new_password: string) {
        this.password = new_password;
    }
}