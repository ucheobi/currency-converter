const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema(
    {
        from: { type: String, required: true },
        to: { type: String, required: true },
        date: { type: String, required: true },
    }
)

module.exports = mongoose.model("Transaction", TransactionSchema);