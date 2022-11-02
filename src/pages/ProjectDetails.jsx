import { projects } from "../data/project";
const ProjectDetails = () => {
  return (
    <>
      <h1>{projects[0].title}</h1>
      <p>{projects[0].description}</p>
      <img src="/connectFour.png" alt="connect four" />
      <button>
        <a href={projects[0].repoLink}>Github</a>
      </button>
      <button>
        <a href={projects[0].deploymentLink}>Deployment</a>
      </button>
    </>
  );
}

export default ProjectDetails;