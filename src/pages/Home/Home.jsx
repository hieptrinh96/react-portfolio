import profilePic from '../../assets/profile-pic.jpeg'
import './Home.css'
const Home = () => {
  return (
    <>
      <div className='info-container'>
        <img src={profilePic} alt="" />
        <div className="description">
          <h3>Hi, I'm Mike.</h3>
          <p>One of the main reasons why I want to be a software engineer is to create applications that can solve problems.</p>
        </div>
      </div>
    </>
  );
}

export default Home;