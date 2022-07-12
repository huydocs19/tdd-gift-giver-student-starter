const express = require("express")
const { route } = require("../app")
const router = express.Router()
const GiftExchange = require("../models/gift-exchange")
const { BadRequestError } = require("../utils/errors")


router.post("/pairs", async (req, res, next) => {
    try {
        if (!req.body.names || !Array.isArray(req.body.names)) {
            next(new BadRequestError())
        }
        const result = GiftExchange.pairs(req.body.names)
        res.status(200).json(result)

    } catch(err) {
        next(new BadRequestError())
    } 
    
})
router.post("/traditional", async (req, res, next) => {
    try {
        if (!req.body.names || !Array.isArray(req.body.names)) {
            next(new BadRequestError())
        }
        const result = GiftExchange.traditional(req.body.names)
        res.status(200).json(result)

    } catch(err) {
        next(new BadRequestError())
    } 
})


module.exports = router