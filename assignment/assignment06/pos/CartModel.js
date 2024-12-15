export default class CartModel {
    constructor(customerId, itemId, material, quantity, price) {
        this._customerId = customerId;
        this._itemId = itemId;
        this._material = material;
        this._quantity = quantity;
        this._price = price;
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

    get material() {
        return this._material;
    }

    set material(value) {
        this._material = value;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        this._quantity = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }
}