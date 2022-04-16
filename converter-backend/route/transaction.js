const router = require("express").Router();
const Transaction = require("../model/Transaction");

//GET ALL TRANSACTIONS
router.get("/history", async (req, res) => {

    try {
        const transactions = await Transaction.find();
        res.status(200).json(transactions)
    } catch (err) {
        res.status(500).json(err)
    }
})

//POST TRANSACTION
router.post("/post", async (req, res) => {

    const { date, from, to} = req.body;

    console.log(req.body);

    //check if all data are complete
    if(!date || !from || !to) {
        res.status(400).json({error: 'Bad request: check missing data'})
    }

    //create an instance of transaction
    let newTransaction = new Transaction({
        date,
        from,
        to
    })

    //save transaction
    try {
        const transaction = await newTransaction.save();
        res.status(201).json(transaction)
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router;