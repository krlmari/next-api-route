import posts from "../../_posts/posts.json";

export default function getPosts(req, res) {
  return res.status(200).json(posts);
}
