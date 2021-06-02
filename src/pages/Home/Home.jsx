import {useEffect, useState } from 'react';
import Header from '../../Header/Header.jsx';
import Posts from '../../posts/Posts.jsx';
import Sidebar from '../../Sidebar/Sidebar.jsx';
import './home.css';
import axios from "axios";
export default function Home() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
          const res = await axios.get("/posts");
          setPosts(res.data);
          console.log(res);
        };
        fetchPosts();
      }, []);

   
    return (
        <>
        <Header/>
        <div className="home">           
        <Posts posts={posts} />
        <Sidebar/>
        </div>
        </>
    )
}
