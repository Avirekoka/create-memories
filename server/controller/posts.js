import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";

const getAllPosts = async (req, res, next) => {
  try {
    const postMessage = await PostMessage.find();
    res.status(200).json(postMessage);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ message: error.message });
  }
};

const createPost = async (req, res, next) => {
  try {
    const post = await req.body;
    const newPost = new PostMessage(post);
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    console.log(error.message);
    res.status(409).json({ message: error.message });
  }
};

// Update post
const updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ message: "No Post with that id found" });

    const updatedPost = await PostMessage.findOneAndUpdate(
      id,
      { ...post, _id: id },
      {
        new: true,
      }
    );

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Delete Post
const deletePost = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).json({ message: "No Post with that id found" });
    }

    await PostMessage.findByIdAndRemove(_id);

    res.json({ message: "Post deleted successfully " });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const likedPost = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).json({ message: "No Post with that id found" });
    }

    const post = await PostMessage.findById(id);

    const updatedPost = await PostMessage.findByIdAndUpdate(
      id,
      {
        likedPost: post.likedPost + 1,
      },
      { new: true }
    );

    res.status(200).json(updatePost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export { getAllPosts, createPost, updatePost, deletePost, likedPost };
