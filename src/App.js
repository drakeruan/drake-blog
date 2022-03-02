import {
  Routes,
  Route,
} from "react-router-dom"

import Home from './components/Home/Home'
import Layout from './components/Layout/Layout'
import Project from './components/ProjectPage/ProjectPage'
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import NotFound from './components/NotFound/NotFound'

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="blog" element={<Blog />}>
          <Route path=":blogId" element={<Blog />} />
        </Route>
        <Route path="project" element={<Project />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
