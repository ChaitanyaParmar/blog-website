'use client';

import styles from "./page.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home/Home'
import CreatePost from "./pages/CreatePost/CreatePost";
import Post from "./pages/Post/Post";

export default function App() {
  
  return (
    <div className={styles.App}>
      <Router>
        <div className={styles.navbar}>
          <Link to={"/createpost"}>Create a Post</Link>
          <Link to="/"> Home Page</Link>
          <Link to="/login"> Login</Link>
          <Link to="/registration"> Registration</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/createpost" element={<CreatePost/>} />
          <Route path="/post/:id" element={<Post/>} />
        </Routes>
      </Router>
    </div>
  );
}
