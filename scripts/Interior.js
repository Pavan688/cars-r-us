import { getInterior, setInterior } from "./database.js";

const interiors = getInterior()

document .addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interior") {
            setInterior(parseInt(changeEvent.target.value))
        }
    }
)

export const CarInterior = () => {
    let html = ""
    html += `<select id="interior">`
    html += '<option value="0">Select a interior package</option>'

    const listItems = interiors.map(
        (interior) => {
            return `
            <option value="${interior.id}">${interior.style}</option>
            `
        }
    )
    html += listItems.join("")
    html += "</select>"
    
    return html
}