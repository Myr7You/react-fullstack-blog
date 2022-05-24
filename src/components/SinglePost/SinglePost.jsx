import './SinglePost.css';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

const SinglePost = () => {
  const PF = `${process.env.REACT_APP_DOMAIN}/images/`;
  
  const location = useLocation()
  const postId = location.pathname.split("/")[2]
  const user = useSelector(state => state.login.user);
  const [post, setPost] = useState('');

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [updateMode, setUpdateMode] = useState(false);

  const handleUpdate = async() => {
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_API}/posts/${postId}`,
        {
          username: user.username,
          title,
          desc
        }
      );
      if(res.status === 200){
        setUpdateMode(false)
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/posts/${postId}`
      );
      if(res.status === 200) {
        setPost(res.data)
        setTitle(res.data.title);
        setDesc(res.data.desc);
      };
    }
    getPost()
  }, [postId]);
  console.log(location);
  console.log(PF + post.photo);
  const handleDelete = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_API}/posts/${postId}`, {
        data: {
          username: user.username
        }
      });
      //here is delete method not post method, infos must be wrapped with data:{}
      window.location.replace('/react-fullstack-blog');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={
            post.photo
              ? PF + post.photo
              : 'https://images.pexels.com/photos/1563604/pexels-photo-1563604.jpeg?cs=srgb&dl=pexels-thiago-japyassu-1563604.jpg&fm=jpg'
          }
          alt=""
        />

        {updateMode ? (
          <input
            type="text"
            value={title}
            className="postdetailTitleIpt"
            autoFocus
            onChange={e => setTitle(e.target.value)}
          ></input>
        ) : (
          <h1 className="singlePostTitle">
            {post.title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon fa-solid fa-pen-to-square"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon fa-solid fa-trash-can"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link className="link" to={`/?user=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.updatedAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            type="text"
            className="postdetailDescIpt"
            value={desc}
            onChange={e => setDesc(e.target.value)}
          ></textarea>
        ) : (
          <p className="singlePostDesc">{post.desc}</p>
        )}

        {updateMode && <button className='singlePostButton' onClick={handleUpdate}>Update</button> }
      </div>
    </div>
  );
};

export default SinglePost;
