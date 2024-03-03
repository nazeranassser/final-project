const express = require('express');
const router = express.Router();
const BlogController = require('../controllers/blogController');

router.get('/', BlogController.getAllBlogs);
router.get('/:blogId', BlogController.getBlogById);
router.post('/', BlogController.createBlog);
router.put('/:blogId', BlogController.updateBlog);
router.delete('/:blogId', BlogController.deleteBlog);

module.exports = router;