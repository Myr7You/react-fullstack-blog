import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sidebarImg"
          src="https://images.pexels.com/photos/3236765/pexels-photo-3236765.jpeg?cs=srgb&dl=pexels-jc-romero-3236765.jpg&fm=jpg"
          alt=""
        />
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
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
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
