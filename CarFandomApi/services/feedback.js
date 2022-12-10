const FeedbackModel = require('../models/Feedback');

module.exports.findAllProducts = async () => {
    try{
        const feedback = await FeedbackModel.find();
        return feedback;
    } catch (err) {
        throw new Error ('Could not retrieve feedback');
    }
};

module.exports.addNewFeedback = async (feedbackInfo) => {
    try {
        const feedback = new FeedbackModel ({
            feedbackID: feedbackInfo.feedbackID,
            customerID: feedbackInfo.customerID,
            feedbackContent: feedbackInfo.feedbackContent
        });
        const createdFeedback = await feedback.save();
        return createdFeedback;
    } catch (err) {
        throw new Error ('could not create feedback');
    }
};