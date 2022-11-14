import hyphenWord from "../../utilities/hyphenateWords";
import { Link } from "react-router-dom";
import './ProjectPreview.css'
const ProjectPreview = (props) => {
  const urlPath = hyphenWord(props.projectTitle)
  return (
    <Link
      to={`/projects/${urlPath}`}
    >
      <div className="project-container">
        <div className="image-container">
          <h3>{props.projectTitle}</h3>
          <img src={props.projectImage} alt={props.projectTitle} />
        </div>
      </div>
    </Link>
  );
}

export default ProjectPreview;