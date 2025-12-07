const express = require("express")
const { authMiddleware } = require("../middleware")
const { Account } = require("../db")

const router  = express.Router()

router.get("/balance", authMiddleware, async ( res, req) => {
    const account = await Account.findOne({
        userId: req.userId
    })
 
    res.json({
        balance: account.balance
    })
})

router.post("/transfer", authMiddleware, async( res, req) => {
    const { amount, id} = req.body

    const account = await Account.findOne({
        user: req.userId
    })

    if( account.balance < amount) {
        return res.status(400).json({
            msg: "Insufficient balance"
        })
    }

    const toAccount = await Account.findOne({
        userId: to
    })

    if (!toAccount) {
        return res.status(400).json({
            msg: "Invalid account"
        })
    }

    await Account.updateOne({
        userId: req.userId
    }, {
        $inc: {
            balance: -amount
        }
    })

    await Account.updateOne({
        userId: to
    }, {
        $inc: {
            balance: amount
        }
    })
    
    res.json({
        msg: "Funds transfer successful"
    })
    
})

module.exports = router