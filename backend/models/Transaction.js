const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    items: [
        {
            contentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Content', required: true },
            quantity: { type: Number, required: true },
        }
    ],
    totalPrice: { type: Number, required: true },
    userDocument: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Transaction', transactionSchema);
