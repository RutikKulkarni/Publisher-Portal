const Transaction = require('../models/Transaction');
const httpStatus = require('http-status');

exports.createTransaction = async (req, res) => {
    try {
        const newTransaction = new Transaction(req.body);
        await newTransaction.save();
        res.status(httpStatus.CREATED).json(newTransaction);
    } catch (err) {
        res.status(httpStatus.BAD_REQUEST).json({ error: err.message });
    }
};
