import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NavBar from './components/NavBar'
import './App.css';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/contact'
          element={<Contact />}
        />
        <Route
          path='/resume'
          element={<Resume />}
        />
        <Route
          path='/projects'
          element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
