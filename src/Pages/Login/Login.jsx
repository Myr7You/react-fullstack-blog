import './Login.css'
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className="login">
      <div className="loginBox">
        <span className="loginTitle">LOGIN</span>
        <form className="loginForm">
          <label>Email</label>
          <input type="text" placeholder="email" />

          <label>Password</label>
          <input type="password" placeholder="Password" />

          <button className="loginBtn">Login</button>
        </form>
      </div>
      <button className="registerBtn">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}

export default Login