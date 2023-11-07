import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfoliodata'
import './About.css'

const About = () => {
  const {photo,name, role, description, } = about

  return (
    <div className='about center'>
      {photo && (
       <img height="200px" alt="picture of me" src={photo} />
      )}
      {name && (
        <h1>
          Hello! I am <span className='about-name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about-role'>A {role}.</h2>}
      <p className='about-desc'>{description && description}</p>

      <div className='about-contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
