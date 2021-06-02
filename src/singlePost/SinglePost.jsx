import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./singlePost.css";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  // console.log(path);
  const [post,setpost] = useState({});
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setpost(res.data)
       console.log(res);
    }
    getPost();

  },[path]);
  return (
    <div className="singlePost">
      <div className="SinglePostWrapper">
        {
           post.photo && ( 
          <img
            className="singlepostImg"
            src={post.photo}
            alt="postImg"
          />
           )}
        <h1 className="singlePostTitle">
           {post.title}
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon far fa-trash-alt"></i>
        </div>
        </h1>
        <div className="singlePostinfo">
          <span className="singlePostAuthor">
            Author: <b>{post.username}</b>
          </span>
          <span className="singlePostdate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDes">
          {post.desc}
        </p>
      </div>
    </div>
  );
}
