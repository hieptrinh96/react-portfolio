import findProject from '../utilities/findProject.js'
import { useParams } from "react-router-dom";
const ProjectDetails = () => {
  const { projectDetails } = useParams()
  const projectInfo = findProject(projectDetails)
  console.log('project info', projectInfo)
  return (
    <>
      <h1>{projectInfo.title}</h1>
      <p>{projectInfo.description}</p>
      <img src={projectInfo.image} alt={projectInfo.title} />
      <button>
        <a href={projectInfo.repoLink}>Github</a>
      </button>
      <button>
        <a href={projectInfo.deploymentLink}>Deployment</a>
      </button>
    </>
  );
}

export default ProjectDetails;