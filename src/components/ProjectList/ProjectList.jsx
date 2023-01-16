import ProjectPreview from '../ProjectPreview/ProjectPreview'
import './ProjectList.css'
const ProjectList = (props) => {
  return (
    <div className="project-container">
      {props.projects.map(project =>
        <div key={project.title}>
          <ProjectPreview
            projectTitle={project.title}
            projectImage={project.image}
            />
        </div>
      )}
      </div>
  );
}

export default ProjectList;