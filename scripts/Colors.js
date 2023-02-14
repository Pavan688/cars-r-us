import { getColor, setColor } from "./database.js"
const colors = getColor()

document .addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "color") {
            setColor(parseInt(changeEvent.target.value))
        }
    }
)

export const CarColors = () => {
    let html = ""
    html += `<select id="color">`
    html += '<option value="0">Select a colors package</option>'

    const listItems = colors.map(
        (color) => {
            return `
            <option value="${color.id}">${color.style}</option>
            `
        }
    )
    html += listItems.join("")
    html += "</select>"
    
    return html
}

