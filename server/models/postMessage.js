import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createAt: {
    type: Date,
    default: new Date(),
  },
  tags: [String],
  selectedFile: String,
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
