const BackgroundVideo = () => {
  return (
    <>
      <video loop autoPlay muted id="background-vid">
        <source src={require('../../assets/background-animation.mp4')} type="video/mp4" />
      </video>
    </>
  );
}
 
export default BackgroundVideo;