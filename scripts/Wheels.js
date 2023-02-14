import { getWheels, setWheels} from "./database.js"
const wheels = getWheels()

document .addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheel") {
            setWheels(parseInt(changeEvent.target.value))
        }
    }
)

export const CarWheels = () => {
    let html = ""
    html += `<select id="wheel">`
    html += '<option value="0">Select a wheels package</option>'

    const listItems = wheels.map(
        (wheel) => {
            return `
            <option value="${wheel.id}">${wheel.type}</option>
            `
        }
    )
    html += listItems.join("")
    html += "</select>"
    
    return html
}

