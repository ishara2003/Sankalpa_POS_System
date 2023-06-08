export class Order{

constructor(id,date,used_qty,total) {

    this._id = id;
    this._date = date;
    this._used_qty = used_qty;
    this._total = total;
}

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get date() {
        return this._date;
    }

    get total() {
        return this._total;
    }

    set total(value) {
        this._total = value;
    }

    set date(value) {
        this._date = value;
    }

    get used_qty() {
        return this._used_qty;
    }

    set used_qty(value) {
        this._used_qty = value;
    }
}