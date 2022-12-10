const feedbackService = require('../services/Feedback');

module.exports.getFeedback = async (req, res) => {
    try {
        const feedback = await feedbackService.findAllProducts();
        res.send({feedback});
    } catch (err) {
        res.status(500);
        res.send({
            error: err
        });
    }
};

module.exports.postFeedback = async (req, res) => {
    const feedbackInfo = {
        feedbackID: req.body.feedbackID,
        customerID: req.body.customerID,
        feedbackContent: req.body.feedbackContent
    };
    try {
        const createdFeedback = await feedbackService.addNewFeedback(feedbackInfo);
        return res.status(201).send({
            msg: 'feedback created successfully',
            FeedbckID: createdFeedback._id
        });
    } catch (err) {
        return res.status(500).send({
            error: err.message
        });
    }
};