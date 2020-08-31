const Score = {
    canasta (val) {
        if (val == "natural") {
            return 500
        } else if (val == "unnatural") {
            return 300
        } else {
            return 0
        }
    },
    loose (card, val) {
        return val * card.value
    },
    remaining (card, val) {
        let remaining = val * card.value

        if (remaining > 0 && card.value > 0) { remaining = remaining * -1 }

        return remaining
    },
    card (card, canastaVal, looseVal, remainingVal) {
        let canasta = this.canasta(canastaVal)
        let loose = this.loose(card, looseVal)
        let remaining = this.remaining(card, remainingVal)
        let total = canasta + loose + remaining

        return {
            canasta,
            loose,
            remaining,
            total
        }
    },
    round (scoreArray) {
        let score = {
            canasta: 0,
            loose: 0,
            remaining: 0,
            total: 0
        }

        for (let index = 0; index < scoreArray.length; index++) {
            const item = scoreArray[index];

            let { card, canasta, loose, remaining} = item
            let cardScore = this.card(card, canasta, loose, remaining)
            
            // increment items
            score.canasta += cardScore.canasta
            score.loose += cardScore.loose
            score.remaining += cardScore.remaining
            score.total += cardScore.total
        }

        return score
    }
}

export default Score