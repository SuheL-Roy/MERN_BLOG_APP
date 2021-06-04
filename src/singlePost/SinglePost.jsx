import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./singlePost.css";
import { Context } from "../context/Context.js";

export default function SinglePost() {
  const PF = "http://localhost:5000/Images/";
  const location = useLocation();
  const { user } = useContext(Context);
  const path = location.pathname.split("/")[2];
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  // console.log(path);
  const [post, setpost] = useState({});
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setpost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      // console.log(res);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      window.location.reload();
    } catch (err) {}
  };
  return (
    <div className="singlePost">
      <div className="SinglePostWrapper">
        {post.photo && (
          <img className="singlepostImg" src={PF + post.photo} alt="" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {post.title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostinfo">
          <span className="singlePostAuthor">
            Author:
            <Link className="Link" to={`/?user=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostdate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDesInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDes">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
