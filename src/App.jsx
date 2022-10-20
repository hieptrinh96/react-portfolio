import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
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
    </>
  );
}

export default App;
