const Content = require('../models/Content');
const httpStatus = require('http-status');

exports.createContent = async (req, res) => {
    try {
        const newContent = new Content(req.body);
        await newContent.save();
        res.status(httpStatus.CREATED).json(newContent);
    } catch (err) {
        res.status(httpStatus.BAD_REQUEST).json({ error: err.message });
    }
};

exports.getContents = async (req, res) => {
    try {
        const contents = await Content.find();
        res.status(httpStatus.OK).json(contents);
    } catch (err) {
        res.status(httpStatus.BAD_REQUEST).json({ error: err.message });
    }
};
