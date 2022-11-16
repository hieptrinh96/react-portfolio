import findProject from '../../utilities/findProject.js'
import { useParams } from "react-router-dom";
import './ProjectDetails.css'
const ProjectDetails = () => {
  const { projectDetails } = useParams()
  const projectInfo = findProject(projectDetails)

  return (
    <div className='project-info'>
      <h1>{projectInfo.title}</h1>
      <img src={projectInfo.image} alt={projectInfo.title} />
      <p>{projectInfo.description}</p>
      <div className="button-container">
        <button>
          <a href={projectInfo.repoLink} target="_blank" rel="noopener noreferrer">Github</a>
        </button>
        <button>
          <a href={projectInfo.deploymentLink} target="_blank" rel="noopener noreferrer">Deployment</a>
        </button>
      </div>
    </div >
  );
}

export default ProjectDetails;