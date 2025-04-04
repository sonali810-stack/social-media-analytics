import React, { useState, useEffect } from "react";
import axios from "../services/api";
import PostCard from "../assets/components/PostCard";

function TrendingPosts() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get("/posts")
      .then((response) => {
        const posts = response.data.posts;
        const trending = posts.reduce(
          (max, post) =>
            post.comments.length > max.comments.length ? post : max,
          posts[0]
        );
        setPost(trending);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div>
      <h2>Trending Post</h2>
      {post ? <PostCard post={post} /> : <p>Loading...</p>}
    </div>
  );
}

export default TrendingPosts;
