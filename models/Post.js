const {Schema, model} = require('mongoose');

const PostSchema = new Schema({
    postID:{
        type:'Number',
        required: true
    },
    custID:{
        type:'Number',
        required: true
    },
    carID:{
        type:'Number',
        required: true
    },
    PublishedDate:{
        type:'Number',
        required:true
    }

});

const PostModel = model('Post', PostSchema);
module.exports = PostModel;