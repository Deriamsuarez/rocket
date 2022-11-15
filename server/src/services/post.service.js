const Post = require("../models/Post");
const Comment = require("../models/Comment");
const User = require("../models/User");

const getPost = async (id) => {
  const posts = await Post.find({ id })
    .lean()
    .populate({
      path: "comments",
      select: '-postId',
      populate: {
        path: 'userId',
        model: User,
        select:  {name: 1, lastName: 1, profileImage: 1}
      }
    })
  return posts;
};

const getPosts = async () => {
  try {
    return await Post.find().lean();
  } catch (err) {
    console.log("error", err);
  }
};

const createPost = async (userId, text, image) => {
  const post = new Post({ userId: userId, text: text, image: image });
  await post.save();
};

const updatePost = async (id, body) => {
  return Post.findOneAndUpdate(id, body);
};

const deletePost = async (id) => {
  return Post.findByIdAndRemove(id);
};

module.exports = { createPost, getPost, getPosts, deletePost, updatePost };
