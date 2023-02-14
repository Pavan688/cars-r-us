import { getTechnology, setTechnology } from "./database.js";

const technologies = getTechnology()

document .addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "technology") {
            setTechnology(parseInt(changeEvent.target.value))
        }
    }
)

export const CarTechnology = () => {
    let html = ""
    html += `<select id="technology">`
    html += '<option value="0">Select a technology package</option>'

    const listItems = technologies.map(
        (technology) => {
            return `
            <option value="${technology.id}">${technology.package}</option>
            `
        }
    )
    html += listItems.join("")
    html += "</select>"
    
    return html
}