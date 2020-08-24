export default class Card {
    constructor (name, abbreviation, value) {
        this.name = name
        this.abbreviation = abbreviation
        this.value = value
        this.count = {
            loose: 0,
            remaining: 0
        } // for loose and remaining
        this.canasta = null // natural or unatural
    }

    recordPlay (canastaType, loose, remaining) {
        this.canasta = canastaType
        this.count = {
            loose,
            remaining
        }

        console.log(this)
    }

    get score () {
        let canasta = 0
        let loose = 0
        let remaining = 0

        // logic for handling point assignment
        switch (this.canasta.toLowerCase()) {
            case null:
                canasta = 0
                break
            case "natural":
                canasta = 500
                break
            case "unnatural":
                canasta = 300
        }

        loose = this.value * this.count.loose

        remaining = this.value * this.count.remaining

        if (remaining > 0) { remaining = remaining * -1 }

        console.info (`${this.name}'s values are: ${canasta}, ${loose}, ${remaining}`)
        
        return {
            canasta,
            loose,
            remaining
        }
    }
}