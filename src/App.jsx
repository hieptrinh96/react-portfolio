import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NavBar from './components/NavBar'
import './App.css';
import Resume from './pages/Resume';

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
      </Routes>
    </>
  );
}

export default App;
