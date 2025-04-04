import React, { useState, useEffect } from "react";
import axios from "../services/api";
import PostCard from "../assets/components/PostCard";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/posts")
      .then((response) => {
        setPosts(response.data.posts.reverse()); // Show newest posts first
      })
      .catch((error) => console.error("Error fetching feed:", error));
  }, []);

  return (
    <div>
      <h2>Live Feed</h2>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
