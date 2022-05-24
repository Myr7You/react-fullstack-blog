import './Login.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { login, loginFailure } from '../../store/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.login.user);
  const [isFetching, setIsFetching] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlerLogin = async (e) => {
    e.preventDefault();
    setIsFetching(true);
    try {
      const res = await axios.post(process.env.REACT_APP_API + '/auth/login', {
        username,
        password
      });
      if (res.status === 200) {
        dispatch(login(res.data));
        setIsFetching(false);
        navigate('/react-fullstack-blog');
      }
    } catch (error) {
      dispatch(loginFailure());
      setIsFetching(false);
    }

  };

  console.log(user);
  return (
    <div className="login">
      <div className="loginBox">
        <span className="loginTitle">LOGIN</span>
        <form className="loginForm" onSubmit={handlerLogin}>
          <label>username</label>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button className="loginBtn" type="submit" disabled={isFetching}>
            Login
          </button>
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