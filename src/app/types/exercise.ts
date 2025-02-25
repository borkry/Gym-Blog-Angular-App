export class Exercise {

    constructor (private _id: number,
        private _name: string,
        private _repeats: number,
        private _rate: string,
        private _RiR: number,
        private _rest: number,
    ){}

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    set name(new_name: string) {
        this._name = new_name;
    }

    get repeats(): number {
        return this._repeats;
    }

    set repeats(new_repeats: number) {
        this._repeats = new_repeats;
    }

    get rate(): string {
        return this._rate;
    }

    set rate(new_rate: string) {
        this._rate = new_rate;
    }

    get RiR(): number {
        return this._RiR;
    }

    set RiR(new_RiR: number) {
        this._RiR = new_RiR;
    }

    get rest(): number {
        return this._rest;
    }

    set rest(new_rest: number) {
        this._rest = new_rest;
    }
}
