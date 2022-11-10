import secondPic from '../../assets/second-pic.jpeg'
import './About.css'
const About = () => {
  return (
    <div className='info-container'>
      <img src={secondPic} alt="" />
      <div className="description">
        <h3>Hi, I'm Mike.</h3>
        <p>One of the main reasons why I want to be a software engineer is to create applications that can solve problems.</p>
      </div>
    </div>
  );
}

export default About;