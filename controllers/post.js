const PostServices = require('../services/Post');

module.exports.getPost = async (req, res) => {
    try{
        const posts = await PostServices.findAllposts();
        res.send({posts});

    } catch(err){
        res.status(500);
        res.send({
            error: err
        });
    }

}