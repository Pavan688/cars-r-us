import { getOrders, getColor, getTechnology, getInterior, getWheels } from "./database.js";
const colors = getColor()
const wheels = getWheels()
const techs = getTechnology()
const interiors = getInterior()


const buildOrderListItem = (order) => {
    const foundColor = colors.find(
        (color) => {
            return color.id === order.colorId
        }
    )
    const foundWheels = wheels.find(
        (wheels) => {
            return wheels.id === order.wheelId
        }
    )
    const foundTehonology = techs.find(
        (technology) => {
            return technology.id === order.technologyId
        }
    )
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )

    let totalCost = foundColor.price + foundWheels.price + foundInterior.price + foundTehonology.price
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
        })
    return `<li>
    Order #${order.id} cost ${costString}
 </li>`

    }
    
    


export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}