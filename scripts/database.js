export const database = {
    color: [
        { id: 1, style: "silver", price: 500},
        { id: 2, style: "Midnight Blue", price: 600},
        { id: 3, style: "Firebrick Red", price: 700},
        { id: 4, style: "Spring Green", price: 800}
    ],
    interior: [
        { id: 1, style: "Beige Fabric", price: 1000},
        { id: 2, style: "Charcoal Fabric", price: 1200},
        { id: 3, style: "White Leather", price: 1300},
        { id: 4, style: "Black Leather", price: 1400},
    ],
    technology: [
        { id: 1, package: "Basic", price: 600},
        { id: 2, package: "Navagation", price: 700},
        { id: 3, package: "Visibility", price: 800},
        { id: 4, package: "Ultra", price: 1000}
    ],
    wheels: [
        { id: 1, type: "17-inch Pair Radial", price: 1200},
        { id: 2, type: "17-inch Pair Radial Black", price: 1300},
        { id: 3, type: "18-inch Pair Spoke Silver", price: 1500},
        { id: 4, type: "18-inch Pair Spoke Black", price: 1600}
    ],
    customOrders: [
        { 
            id: 1,
            colorId: 3,
            interiorId: 4,
            technologyId: 3,
            wheelId: 4,
            timestamp: 1614659931693
        }
    ],
    orderBuilder: {}
}

export const getColor = () => {
    return database.color.map(color => ({...color}))
}

export const getInterior = () => {
    return database.interior.map(interior => ({...interior}))
}

export const getTechnology = () => {
    return database.technology.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheels => ({...wheels}))
}

export const getOrders = () => {
    return database.customOrders.map(orders => ({...orders}))
}

export const setColor = (id) => {
    database.orderBuilder.colorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}


export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}

    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id+ 1

    newOrder.timestamp = Date.now()

    database.customOrders.push(newOrder)

    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}