import { CarColors } from "./Colors.js"
import { CarInterior } from "./Interior.js"
import { CarTechnology } from "./Technology.js"
import { CarWheels } from "./Wheels.js"
import { addCustomOrder } from "./database.js"
import { Orders} from "./Orders.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)



export const CarsRUs = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__colors options">
                <h2>Colors</h2>
                ${CarColors()}
            </section>
            <section class="choices__interior options">
                <h2>Interior</h2>
                ${CarInterior()}
            </section>
            <section class="choices__technology options">
                <h2>Technology</h2>
                ${CarTechnology()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${CarWheels()}
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}