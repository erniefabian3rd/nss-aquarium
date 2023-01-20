import { getTips } from '../database.js'

export const TipList = () => {
    const tips = getTips()
    let HTML = `<ol class="ordered-list">`
    for (const tip of tips)  {
            HTML += `<li>${tip}</li>`
    }
    HTML += `</ol>`
    return HTML
}