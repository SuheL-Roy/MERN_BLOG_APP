
import React from 'react'
import Sidebar from '../../../Sidebar/Sidebar.jsx';
import SinglePost from '../../../singlePost/SinglePost.jsx';
import './single.css';

export default function Single() {
    return (
        <div className="single">
           <SinglePost/>
            <Sidebar/>


        </div>
    )
}
