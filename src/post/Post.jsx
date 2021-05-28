import React from "react";
import "./post.css";
export default function Post() {
  return (
    <div className="post">
      <img
       className="postImg"
        src="https://picsum.photos/700/400"
        alt="postImg"
      />
      <div className="postinfo">
        <div className="postCata">
          <span className="postCats">Music</span>
          <span className="postCats">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
    </div>
  );
}
