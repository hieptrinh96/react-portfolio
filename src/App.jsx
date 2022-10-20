import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import NavBar from './components/NavBar'
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/'
          element={<Home />}
        />
      </Routes>
      <NavBar />
    </>
  );
}

export default App;
