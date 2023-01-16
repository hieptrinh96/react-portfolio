import styles from './Resume.module.css'
const Resume = () => {
  return (
    <div className={styles['resume-container']}>
      <embed
        type="application/pdf"
        src="/HiepTrinh.pdf"
        height="500%"
        width="100%"
      />
      <button className='a-container'>
        <a href="/HiepTrinh.pdf" download>Download</a>
      </button>
    </div>
  );
}

export default Resume;