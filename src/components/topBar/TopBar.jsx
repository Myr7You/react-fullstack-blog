import "./TopBar.css"
import { Link } from "react-router-dom";
const TopBar = () => {
  const user = false;
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
            <Link className="link" to="/">
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
          {user ? (<li className="topListItem">
            <Link className="link" to="/login">
              LOGOUT
            </Link>
          </li>) : null}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            src="https://images.pexels.com/photos/6765625/pexels-photo-6765625.jpeg?cs=srgb&dl=pexels-michelle-leman-6765625.jpg&fm=jpg"
            className="topImg"
            alt="profile"
          />
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