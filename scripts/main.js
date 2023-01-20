import { getFish } from './database.js'
import { FishList } from './fish/FishList.js'
import { getTips } from './database.js'
import { TipList } from './tips/TipList.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

const allTips = getTips()

// Import the FishList function from the correct module


/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */

const parentHTMLElement = document.querySelector(".just-fish")
parentHTMLElement.innerHTML = FishList()

const sectionHTMLElement = document.querySelector(".care-list")
sectionHTMLElement.innerHTML = TipList()
