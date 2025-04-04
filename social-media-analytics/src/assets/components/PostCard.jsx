import React from "react";

function PostCard({ post }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.content}</p>
        <p className="text-muted">{post.comments.length} comments</p>
      </div>
    </div>
  );
}

export default PostCard;
