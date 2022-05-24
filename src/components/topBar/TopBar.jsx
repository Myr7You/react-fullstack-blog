import "./TopBar.css"
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../../store/auth';

const TopBar = () => {
  const PF = `${process.env.REACT_APP_DOMAIN}/images/`;
  const dispatch = useDispatch();
  const user = useSelector(state => state.login.user);

  const handleLogout = () => {
    dispatch(logout());
  }
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
        <i className="topIcon fa-brands fa-weibo"></i>
        <i className="topIcon fa-brands fa-weixin"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/react-fullstack-blog/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user ? (
            <li className="topListItem" onClick={handleLogout}>
              LOGOUT
            </li>
          ) : null}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/setting">
            <img
              src={
                user.profilePic
                  ? user.profilePic.includes('http')
                    ? user.profilePic
                    : PF + user.profilePic
                  : 'https://res.cloudinary.com/dq8qhdgox/image/upload/v1652339532/common/user_mfoimf.png'
              }
              className="topImg"
              alt="profile"
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link top_LoginBtn" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearch fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default TopBar