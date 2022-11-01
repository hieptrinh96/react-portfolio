import ProjectList from '../components/ProjectList';
import { projects } from '../data/project'
const Projects = () => {
  return (
    <>
      <h2>Projects</h2>
      <ProjectList projects={projects} />
    </>
  );
}

export default Projects;