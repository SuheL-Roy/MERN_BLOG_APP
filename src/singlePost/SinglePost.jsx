import React from "react";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="SinglePostWrapper">
        <img
          className="singlepostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="postImg"
        />
        <h1 className="singlePostTitle">Lorem ipsum dolor, sit amet
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon far fa-trash-alt"></i>
        </div>
        </h1>
        <div className="singlePostinfo">
          <span className="singlePostAuthor">
            Author: <b>David</b>
          </span>
          <span className="singlePostdate">1 hour ago</span>
        </div>
        <p className="singlePostDes">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          autem, voluptatibus eum ipsum temporibus iste tempore quam saepe
          voluptatem ducimus totam officia, exercitationem delectus rerum ex
          fugit quo consequuntur quia!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          autem, voluptatibus eum ipsum temporibus iste tempore quam saepe
          voluptatem ducimus totam officia, exercitationem delectus rerum ex
          fugit quo consequuntur quia!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          autem, voluptatibus eum ipsum temporibus iste tempore quam saepe
          voluptatem ducimus totam officia, exercitationem delectus rerum ex
          fugit quo consequuntur quia!
        </p>
      </div>
    </div>
  );
}
