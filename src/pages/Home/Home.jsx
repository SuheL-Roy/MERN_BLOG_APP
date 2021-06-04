import {useEffect, useState } from 'react';
import Header from '../../Header/Header.jsx';
import Posts from '../../posts/Posts.jsx';
import Sidebar from '../../Sidebar/Sidebar.jsx';
import './home.css';
import axios from "axios";
import { useLocation } from 'react-router';
export default function Home() {

    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
          const res = await axios.get("/posts" + search);
          setPosts(res.data);
         // console.log(res);
        };
        fetchPosts();
      }, [search]);

   
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
