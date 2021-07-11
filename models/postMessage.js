import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    data:String,
});

const PostMessage = mongoose.model('Message', postSchema);

export default PostMessage;