import './Register.css';
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div className="reigister">
      <div className="loginBox">
        <span className="loginTitle">REGISTER</span>
        <form className="loginForm">
          <label>Username</label>
          <input type="text" placeholder="username" />

          <label>Email</label>
          <input type="text" placeholder="email" />

          <label>Password</label>
          <input type="password" placeholder="password" />

          <button className="register_Btn">Register</button>
        </form>
      </div>
      <button className="login_Btn">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
};

export default Register;
