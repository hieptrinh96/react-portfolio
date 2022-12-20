import './Home.css'
import Contact from '../Contact/Contact'
import Projects from '../Projects';
const Home = () => {
  return (
      <div className='page-container'>
          <h3>Hi,</h3>
          <h3>I'm Mike.</h3>
        <div className="project-container">
          <Projects />
        </div>
        <div className="contact-container">
          <Contact />
        </div>
      </div>
  );
}

export default Home;