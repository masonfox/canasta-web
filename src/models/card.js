export default class Card {
    constructor (name, abbreviation, value) {
        this.name = name
        this.abbreviation = abbreviation
        this.value = value
        this.loose = 0
        this.remaining = 0
        this.canasta = null // natural or unatural
    }

    recordPlay (canastaType, loose, remaining) {
        if (canastaType !== null) {
            let clean = canastaType.toLowerCase()
            if (clean == "unnatural" || clean == "natural") {
                this.canasta = clean
            } else {
                new Error (`Canasta for ${this.name} cannot be ${canastaType}`)
            }
        }
        this.loose = loose
        this.remaining = remaining
    }

    get score () {
        let canasta = 0
        let loose = 0
        let remaining = 0

        // logic for handling point assignment
        switch (this.canasta) {
            case null:
                canasta = 0
                break
            case "natural":
                canasta = 500
                break
            case "unnatural":
                canasta = 300
        }

        loose = this.value * this.loose

        remaining = this.value * this.remaining

        if (remaining > 0 && this.value > 0) { remaining = remaining * -1 }

        // console.info(`${this.name}'s values are: ${canasta}, ${loose}, ${remaining}`)
        
        return {
            canasta,
            loose,
            remaining
        }
    }
}