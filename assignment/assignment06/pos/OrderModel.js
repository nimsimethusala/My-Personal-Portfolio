export default class OrderModel {
    constructor(orderId, customerId, itemId, date, itemName, quantity, total ) {
        this._orderId = orderId;
        this._customerId = customerId;
        this._itemId = itemId;
        this._date =date;
        this._itemName = itemName;
        this._quantity = quantity;
        this._total = total;
    }

    get orderId() {
        return this._orderId;
    }

    set orderId(value) {
        this._orderId = value;
    }

    get customerId() {
        return this._customerId;
    }

    set customerId(value) {
        this._customerId = value;
    }

    get itemId() {
        return this._itemId;
    }

    set itemId(value) {
        this._itemId = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }

    get itemName() {
        return this._itemName;
    }

    set itemName(value) {
        this._itemName = value;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        this._quantity = value;
    }

    get total() {
        return this._total;
    }

    set total(value) {
        this._total = value;
    }
}