const ProjectList = (props) => {
  return (
    <>
      <h2>Project List</h2>
      {props.projects.map(project =>
        <ul key={project.title}>
          <li>{project.title}</li>
          <li>{project.description}</li>
        </ul>
      )}
    </>
  );
}

export default ProjectList;