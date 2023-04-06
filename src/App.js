import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import Blog from './pages/Blog';
import Home1 from './pages/Home';
import Event from './routes/Event';
import Project from './routes/Project';
import Team from './routes/Team';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/team' element={<Team />} />
        <Route path='/project' element={<Project />} />
        <Route path='/event' element={<Event />} />
        <Route path='/' element={<Home1/>} />
        <Route path='/blog/:id' element={<Blog/>}/>
      </Routes>
    </>
  );
}

export default App;
