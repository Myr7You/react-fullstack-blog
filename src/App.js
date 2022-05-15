

import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import TopBar from './components/topBar/TopBar';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Setting from './Pages/Setting/Setting';
import PostDetail from './Pages/PostDetail/PostDetail';
import Write from './Pages/Write/Write';
import "./App.css"

import { useSelector } from 'react-redux';
function App() {
  
  const user = useSelector(state => state.login.user);
  return (
    <div className="App">
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/setting" element={user ? <Setting /> : <Login />} />
        <Route path="/post/:postId" element={<PostDetail />} />

        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
      </Routes>
    </div>
  );
}

export default App;
