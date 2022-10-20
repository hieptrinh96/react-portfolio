import profilePic from '../assets/profile-pic.jpeg'
const Home = () => {
  return (
    <>
      <h1>Mike Trinh</h1>
      <h2>Software Developer</h2>
      <img src={profilePic} alt="" />
      <h4>I enjoy creating applications to solve problems </h4>
    </>
  );
}

export default Home;