export class Order_Details{
    get od_date() {
        return this._od_date;
    }

    set od_date(value) {
        this._od_date = value;
    }

    constructor(od_id,od_cusNIC,od_date,od_itemName,od_usedQTY,od_unitPrice,od_tot) {


        this._od_id = od_id;
        this._od_cusNIC = od_cusNIC;
        this._od_date = od_date;
        this._od_itemName = od_itemName;
        this._od_usedQTY = od_usedQTY;
        this._od_unitPrice = od_unitPrice;
        this._od_tot = od_tot;
    }
    get od_id() {
        return this._od_id;
    }

    set od_id(value) {
        this._od_id = value;
    }

    get od_cusNIC() {
        return this._od_cusNIC;
    }

    set od_cusNIC(value) {
        this._od_cusNIC = value;
    }

    get od_itemName() {
        return this._od_itemName;
    }

    set od_itemName(value) {
        this._od_itemName = value;
    }

    get od_usedQTY() {
        return this._od_usedQTY;
    }

    set od_usedQTY(value) {
        this._od_usedQTY = value;
    }

    get od_unitPrice() {
        return this._od_unitPrice;
    }

    set od_unitPrice(value) {
        this._od_unitPrice = value;
    }

    get od_tot() {
        return this._od_tot;
    }

    set od_tot(value) {
        this._od_tot = value;
    }



}