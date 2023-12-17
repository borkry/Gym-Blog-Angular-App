export class User {

    constructor(private _id : number,
        private _name : string,
        private _surname : string,
        private _email : string,
        private _password : string,
        private _isAdmin: boolean
    ){}

    get id(): number {
        return this.id;
    }

    get name(): string {
        return this._name;
    }

    set name(new_name: string) {
        this._name = new_name;
    }

    get surname(): string {
        return this._surname;
    }

    set surname(new_surname: string) {
        this._surname = new_surname;
    }

    get email(): string {
        return this._email;
    }

    set email(new_email: string) {
        this._email = new_email;
    }

    get password(): string {
        return this._password;
    }

    set password(new_password: string) {
        this._password = new_password;
    }

    get isAdmin(): boolean {
        return this._isAdmin;
    }

    set isAdmin(isAdmin: boolean) {
        this._isAdmin = isAdmin;
    }
}
