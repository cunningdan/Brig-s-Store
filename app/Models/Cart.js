// import { generateId } from "../Utils/GenerateID.js"
// import Items from "./Items.js"
// export default class Cart {
//     constructor({ name, price, cartQty, img, total, items }) {
//         this.price = price
//         this.cartQty = cartQty
//         this.name = name
//         this.img = img
//         this.total = total
//         this.items = items
//     }

//     get cartTemplate() {
//         return /*html*/ `
//         <tr>
//             <td class="w-25">
//                 <img id=""
//                     src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png"
//                     class="img-fluid img-thumbnail" alt="Sheep">
//             </td>
//             <td id="">${this.name}</td>
//             <td id="">$${this.price}</td>
//             <td class="qty">${this.cartQty}<input type="text" class="form-control" id="input1" value="${this.cartQty}">
//             </td>
//             <td>$${this.total}</td>
//             <td>
//                 <a href="#" class="btn btn-danger btn-sm">
//                     <i class="fa fa-times"></i>
//                 </a>
//             </td>
//         </tr>
//         `
//     }
// }