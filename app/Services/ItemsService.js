import Items from "../Models/Items.js"
import { ProxyState } from "../AppState.js";

class ItemsService {
    addItems() {
        ProxyState.items = [...ProxyState.items, new Items()]
    }
    addToCart(id) {
        let temp = ProxyState.items
        let itemIndex = temp.findIndex(i => i.id == id)
        let cartItem = temp.find(i => i.id == id)
        if (ProxyState.cart.find(item => item.id == cartItem.id)) {
            cartItem.cartQty++
        } else {
            ProxyState.cart.push(cartItem) && cartItem.cartQty++
        }
        temp.splice(itemIndex, 1)
        temp.push(cartItem)
        ProxyState.items = temp;
    }
    removeFromCart(id) {
        let temp = ProxyState.items
        let itemIndex = temp.findIndex(i => i.id == id)
        let cartItem = temp.find(item => item.id == id)
        let cartIndex = ProxyState.cart.findIndex(item => item.id == cartItem.id)
        if (ProxyState.cart.find(item => item.id == cartItem.id)) {
            if (cartItem.cartQty > 0) {
                cartItem.cartQty--
            } else {
                ProxyState.cart = ProxyState.cart.splice(cartIndex, 1)
            }
        }
        temp.splice(itemIndex, 1)
        temp.push(cartItem)
        ProxyState.items = temp;
    }
}


export const itemsService = new ItemsService();
