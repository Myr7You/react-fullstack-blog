import './Setting.css'
import Sidebar from '../../components/Sidebar/Sidebar';
const Setting = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdTitle">Update Your Account</span>
          <span className="settingsDelTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsProP">
            <img
              className="sidebarImg"
              src="https://images.pexels.com/photos/3236765/pexels-photo-3236765.jpeg?cs=srgb&dl=pexels-jc-romero-3236765.jpg&fm=jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: 'none' }} />
          </div>
          <div className="formItem">
            <label>Username</label>
            <input type="text" placeholder="Peter" />
          </div>
          <div className="formItem">
            <label>Email</label>
            <input type="text" placeholder="Email@email.com" />
          </div>
          <div className="formItem">
            <label>Password</label>
            <input type="password" />
          </div>
          <button className="settingBtn">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Setting