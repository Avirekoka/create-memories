import express from "express";
import {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
  likedPost,
} from "../controller/posts.js";

const router = express.Router();

router.get("/", getAllPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likedPost", likedPost);

export default router;
