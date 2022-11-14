import ProjectPreview from './ProjectPreview/ProjectPreview'
const ProjectList = (props) => {
  return (
    <>
      {props.projects.map(project =>
        <ul key={project.title}>
          <ProjectPreview
            projectTitle={project.title}
            projectImage={project.image}
          />
        </ul>
      )}
    </>
  );
}

export default ProjectList;