import Items from "./Models/Items.js"
// import Cart from "./Models/Cart.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Items[]} */
  items = [new Items({ price: 1000, quantity: 5, description: "very descriptive description", cartQty: 0, name: "baseballl bat", img: "//placehold.it/200x200" })]
  cart = []
}


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
