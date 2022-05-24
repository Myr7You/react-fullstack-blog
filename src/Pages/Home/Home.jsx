/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Home.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Home = () => {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
  const isLogin = useSelector(state => state.login);
  console.log(isLogin);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/posts` + search
      );
      if (res.status === 200) {
        setPosts(res.data);
      }
    };
    fetchPosts();
  }, [search]);
  
  return (
    <div>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
