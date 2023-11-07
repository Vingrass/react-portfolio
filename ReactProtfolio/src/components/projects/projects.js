import uniqid from 'uniqid'
import { projects } from '../../portfoliodata'
import projectHandler from '../projectHandler/projectHandler'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section-title'>Projects</h2>

      <div className='projects-grid'>
        {projects.map((project) => (
          <projectHandler key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
