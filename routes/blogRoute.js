const express = require("express");
const {
  getAllBlogsController,
  createBlogController,
  updateBlogController,
  getBlogByIdController,
  deleteBlogController,
  userBlogControlller,
} = require("../controllers/blogController");

//router object
const router = express.Router();

//routes

// GET || get all blogs
router.get("/get-all-blogs", getAllBlogsController);

// POST || create blog
router.post("/create-blog", createBlogController);

//PUT || update blog
router.put("/update-blog/:id", updateBlogController);

//GET || Get Specific Blog
router.get("/get-blog/:id", getBlogByIdController);

//DELETE || delete blog
router.delete("/delete-blog/:id", deleteBlogController);

//GET || user blog
router.get("/user-blog/:id", userBlogControlller);

module.exports = router;
