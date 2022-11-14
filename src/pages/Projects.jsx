import ProjectList from '../components/ProjectList/ProjectList';
import { projects } from '../data/project'
const Projects = () => {
  return (
    <>
      <ProjectList projects={projects} />
    </>
  );
}

export default Projects;