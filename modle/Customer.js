export class Customer{

    constructor(nic,name,address,number) {

        this._nic = nic;
        this._name = name;
        this._address = address;
        this._number = number;

    }

    get nic() {
        return this._nic;
    }

    set nic(value) {
        this._nic = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get number() {
        return this._number;
    }

    set number(value) {
        this._number = value;
    }
}