import './Setting.css'
import Sidebar from '../../components/Sidebar/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { updateLogin } from '../../store/auth';
import { useState } from 'react';
import axios from 'axios';
const Setting = () => {
  const PF = `${process.env.REACT_APP_DOMAIN}/images/`;
  const dispatch = useDispatch();
  const user = useSelector(state => state.login.user);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState('');
  const [success, setSuccess] = useState(false);
 const handleSubmit = async (e) => {
   e.preventDefault();
   const updateUser = {
     userId: user._id,
     username,
     email,
     password
   };
   if (file) {
     const data = new FormData();
     const filename = Date.now() + file.name;
     data.append('name', filename);
     data.append('file', file);
     updateUser.profilePic = filename;
     try {
       await axios.post(`${process.env.REACT_APP_API}/upload`, data);
     } catch (error) {
       console.log(error);
     }
   }
   try {
     const res = await axios.put(
       `${process.env.REACT_APP_API}/users/${user._id}`,
       updateUser
     );
     console.log(res);
     if(res.status === 200){
       setSuccess(true)
       console.log(res)
       dispatch(updateLogin(res.data));
     }

    //  window.location.reload();
   } catch (error) {
     console.log(error);
   }
 };
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdTitle">Update Your Account</span>
          <span className="settingsDelTitle">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsProP">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : user.profilePic.includes('http')
                  ? user.profilePic
                  : PF + user.profilePic
              }
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: 'none' }}
              onChange={e => setFile(e.target.files[0])}
            />
          </div>
          <div className="formItem">
            <label>Username</label>
            <input
              type="text"
              placeholder={user.username}
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="formItem">
            <label>Email</label>
            <input
              type="text"
              placeholder={user.email}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="formItem">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button className="settingBtn" type="submint">
            Update
          </button>
          {success && (
            <span style={{ color: 'green' }}>Profile has been updated ...</span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Setting