const BadRequestError = require("../utils/errors")

class GiftExchange {
    static pairs(names) {
        if (names.length % 2 != 0) {
            throw new BadRequestError("The number of names can't be odd")
        }
        const shuffled = [...names].sort(() => 0.5 - Math.random());
        let randomPairs = []
        for (let i = 0; i < names.length; i += 2) {
            randomPairs.push([shuffled[i], shuffled[i + 1]])
        }
        return randomPairs
    }
    static traditional(names) {        
        let giftPairs = []
        const shuffled = [...names].sort(() => 0.5 - Math.random());
        for (let i = 0; i < shuffled.length; i += 1) {
            giftPairs.push(`${shuffled[i % shuffled.length]} is giving a gift to ${shuffled[(i + 1) % shuffled.length]}`)
        }        
        return giftPairs
    }

}

module.exports = GiftExchange