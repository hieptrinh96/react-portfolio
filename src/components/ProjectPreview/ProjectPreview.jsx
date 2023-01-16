import hyphenWord from "../../utilities/hyphenateWords";
import { Link } from "react-router-dom";
import styles from './ProjectPreview.module.css'
const ProjectPreview = (props) => {
  const urlPath = hyphenWord(props.projectTitle)
  return (
    <div className={styles["project-container"]}>
    <Link
      to={`/projects/${urlPath}`}
    >
        <div className={styles["image-container"]}>
          <h3>{props.projectTitle}</h3>
          <img src={props.projectImage} alt={props.projectTitle} />
        </div>
    </Link>
      </div>
  );
}

export default ProjectPreview;