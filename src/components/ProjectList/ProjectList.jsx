import ProjectPreview from '../ProjectPreview/ProjectPreview'
import styles from './ProjectList.module.css'
const ProjectList = (props) => {
  return (
    <div className={styles["project-container"]}>
      {props.projects.map(project =>
        <div key={project.title} className={styles['title-container']}>
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