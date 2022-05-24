import './Register.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
const Register = () => {
  const [username, setUsername] = useState('')
  const [password, serPassword] = useState('');
  const [email, serEmail] = useState('');
  const [error, serError] = useState(false);

  const handleRegister = async (event) => {
    event.preventDefault();
    serError(false);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/auth/register`,
        {
          username,
          password,
          email
        }
      );


      if (res.status === 200) {
        window.location.replace("/login")
      }
    } catch (err) {
      serError(true)
    }
    
  }
  return (
    <div className="reigister">
      <div className="loginBox">
        <span className="loginTitle">REGISTER</span>
        <form className="loginForm" onSubmit={handleRegister}>
          <label>Username</label>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />

          <label>Email</label>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={e => serEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={e => serPassword(e.target.value)}
          />

          <button className="register_Btn" type="submit">
            Register
          </button>
          {error && (
            <p
              style={{
                color: 'crimson',
                marginTop: '10px',
                textAlign: 'center'
              }}
            >
              Something went wrong!
            </p>
          )}
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
