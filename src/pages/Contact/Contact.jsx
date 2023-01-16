import styles from './Contact.module.css'
import secondPic from '../../assets/second-pic.jpeg'
import linkedInIcon from '../../assets/linkedInIcon.png'
import githubIcon from '../../assets/github.png'
import gmailIcon from '../../assets/gmail.png'
const Contact = () => {
  return (
    <div className={styles["contact-container"]}>
      <img src={secondPic} alt="" />
      <p>Please feel free to contact me!</p>
      <div className={styles["icon-container"]}>
        <a href="https://www.linkedin.com/in/hieptrinh/" target="_blank" rel="noopener noreferrer"><img src={linkedInIcon} alt="" /></a>
        <a href="https://github.com/hieptrinh96" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="" /></a>
        <a href="mailto: xmikecolx@gmail.com" target="_blank" rel="noopener noreferrer"><img src={gmailIcon} alt="" /></a>
      </div>
    </div>
  );
}

export default Contact;