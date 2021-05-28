import React from 'react';
import Header from '../../Header/Header.jsx';
import Posts from '../../posts/Posts.jsx';
import Sidebar from '../../Sidebar/Sidebar.jsx';
import './home.css';
export default function Home() {
    return (
        <>
        <Header/>
        <div className="home">           
        <Posts/>
        <Sidebar/>
        </div>
        </>
    )
}
