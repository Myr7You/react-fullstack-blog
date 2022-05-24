import './Write.css';
import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Write = () => {
  const user = useSelector(state => state.login.user);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const newPost = {
      title,
      desc,
      username: user.username,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.photo = filename
      try {
        await axios.post(`${process.env.REACT_APP_API}/upload`, data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/posts`,
        newPost
      );
      window.location.replace("/post/"+ res.data._id)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="write">
      {file && (
        <img
          className="writeImg"
          src={URL.createObjectURL(file)}
          alt=""
        />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: 'none' }} onChange={e => setFile(e.target.files[0])}/>
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Your Story..."
            type="text"
            className="writeInput writeText"
            value={desc}
            onChange={e => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeBtn" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
