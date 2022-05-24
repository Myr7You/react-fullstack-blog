import './Sidebar.css';
import {useState, useEffect} from "react"
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Sidebar = () => {
  const PF = `${process.env.REACT_APP_DOMAIN}/images/`;
  const [cates, setCates] = useState([]);
  const user = useSelector(state => state.login.user);

  useEffect(() => {
    const fetchCates = async () => {
      const res = await axios.get('/categories')
      if(res.status === 200) {
        setCates(res.data)
      };
    }
    fetchCates()
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        {user && (
          <img
            className="sidebarImg"
            src={
              user.profilePic
                ? user.profilePic.includes('http')
                  ? user.profilePic
                  : PF + user.profilePic
                : 'https://res.cloudinary.com/dq8qhdgox/image/upload/v1652339532/common/user_mfoimf.png'
            }
            alt=""
          />
        )}
        <p>
          Aliquip magna in sint duis proident cupidatat proident cupidatat nisi.
          Duis proident enim ea ex magna aliquip veniam nisi nisi consequat
          nostrud nulla ut. Excepteur Lorem occaecat ea est. Velit eiusmod do
          deserunt cillum enim laboris.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cates.map(cate => (
            <Link className="link" key={cate.name} to={`/?cat=${cate.name}`}>
              <li className="sidebarListItem">{cate.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sibearSocial">
          <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
          <i className="sidebarIcon fa-brands fa-weibo"></i>
          <i className="sidebarIcon fa-brands fa-weixin"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
