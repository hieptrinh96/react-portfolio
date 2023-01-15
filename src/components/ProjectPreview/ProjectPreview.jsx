import hyphenWord from "../../utilities/hyphenateWords";
import { Link } from "react-router-dom";
import './ProjectPreview.css'
const ProjectPreview = (props) => {
  const urlPath = hyphenWord(props.projectTitle)
  return (
    <div className="project-container">
    <Link
      to={`/projects/${urlPath}`}
    >
        <div className="image-container">
          <h3>{props.projectTitle}</h3>
          <img src={props.projectImage} alt={props.projectTitle} />
        </div>
    </Link>
      </div>
  );
}

export default ProjectPreview;