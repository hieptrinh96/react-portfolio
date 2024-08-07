import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import NavBar from './components/CustomNavbar/CustomNavBar'
import './App.css';
import Resume from './pages/Resume/Resume';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
function App() {
  return (
    <>
      <NavBar />
      <Routes>
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
        <Route
          path='/projects/:projectDetails'
          element={<ProjectDetails />} />
      </Routes>
    </>
  );
}

export default App;
