import hyphenWord from "../utilities/hyphenateWords";
import { Link } from "react-router-dom";

const ProjectPreview = (props) => {
  const urlPath = hyphenWord(props.projectTitle)
  return (
    <>
      <div>
        <img src={props.projectImage} alt={props.projectTitle} />
        <section>
          <h3>{props.projectTitle}</h3>
          <Link
            to={`/projects/${urlPath}`}
          >
            <button>Learn more</button>
          </Link>
        </section>
      </div>
    </>
  );
}

export default ProjectPreview;