import { generateId } from "../Utils/GenerateID.js"
export default class Items {
    constructor({ price, quantity, description, name, img, cartQty, }) {
        this.price = price
        this.quantity = quantity
        this.description = description
        this.name = name
        this.img = img
        this.cartQty = cartQty
        this.id = generateId()
    }

    get Template() {
        return /*html*/ `<div class="col-4">
    <div class="card">
    <img class="card-img-top img-fluid" src="${this.img}" alt=""/>
    <div class="card-body">
        <h4 class="card-title">${this.name} <br> $${this.price} </h4>
        <p class="card-text">${this.description} <br> In Stock: ${this.quantity}</p>
        <button class="btn btn-success" type="" onclick="app.itemsController.addToCart('${this.id}')">Add to Cart</button>
        <div class="form-group p-1">
    </div>
    </div>
    </div>
</div>`
    }
    get cartTemplate() {
        return /*html*/ `
        <tr>
            <td class="w-25">
                <img id=""
                    src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png"
                    class="img-fluid img-thumbnail" alt="Sheep">
            </td>
            <td id="">${this.name}</td>
            <td id="">$${this.price}</td>
            <td class="qty">${this.cartQty}<input type="text" class="form-control" id="input1" value="${this.cartQty}">
            </td>
            <td>178$</td>
            <td>
                <a href="#" class="btn btn-danger btn-sm">
                    <i onclick="app.itemsController.removeFromCart('${this.id}')" class="fa fa-times">delete</i>
                </a>
            </td>
        </tr>
        `
    }
}