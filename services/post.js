const PostModel = require('../models/Post');

module.exports.findAllposts = async () => {
    try{
        const posts = await PostModel.find();
        return Employees;


    } catch(err){
    throw new Error("could not retrieve posts");
}
};

module.exports.addNewPost = async (PostInfo) => {
    try{
        const Posts = new PostModel({
        postID: addNewPost.postID,
        custID: addNewPost.custID,
        carID: addNewPost.carID,
        PublishedDate: addNewPost.PublishedDate
    });
    const createdPost = await PostModel.save();
    return createdPost;


    } catch(err){
    throw new Error("could not create post");
}
};