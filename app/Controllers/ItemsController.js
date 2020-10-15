import { ProxyState } from "../AppState.js";
import { itemsService } from "../Services/ItemsService.js";


//Private
function _draw() {
    let items = ProxyState.items;
    let template = ''
    items.forEach(v => template += v.Template)
    document.getElementById("app").innerHTML = template
}
//Private
function _drawCart() {
    let items = ProxyState.items;
    let template = ''
    items.forEach(v => template += v.cartTemplate)
    document.getElementById("cartItems").innerHTML = template
}

//Public
export default class ItemsController {
    constructor() {
        ProxyState.on("items", _draw, _drawCart);
        _draw()
        _drawCart()
    }

    addItems() {
        itemsService.addItems()
    }
    addToCart(id) {
        itemsService.addToCart(id)
        _drawCart()
    }
    removeFromCart(id) {
        itemsService.removeFromCart(id)
        _drawCart()
    }

}

function Cart() {
    $(document).ready(function () {
        // @ts-ignore
        $('#cartModal').modal('show');
    });
}
