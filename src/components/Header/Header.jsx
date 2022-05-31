import './Header.css';

const Header = ({link,title,smTil}) => {
  return (
    <div className="header">
      <div className="headerTitles">
        {smTil && <span className="headerTitleSm">{smTil}</span>}
        <span className="headerTitleLg">{title}</span>
      </div>
      <img className={smTil ? 'headerImg' : 'headerImgX'} src={link} alt="" />
    </div>
  );
}

export default Header