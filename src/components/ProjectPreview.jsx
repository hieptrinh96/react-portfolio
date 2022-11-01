const ProjectPreview = (props) => {
  return (
    <>
      <div>
        <img src={props.projectImage} alt={props.projectTitle} />
        <section>
          <h3>{props.projectTitle}</h3>
          <button>Learn more</button>
        </section>
      </div>
    </>
  );
}

export default ProjectPreview;