import pfpic from "../assests/meandsalsa"

const header = {

  homepage: 'https://github.com/Vingrass/react-portfolio',
  title: 'JavaScript',
}

const contact = {
    email: 'ingrassiav99@gmail.com',
  }

const about = {
  photo:pfpic,
  name: 'Vincent Ingrassia',
  role: 'Student',
  description:
    'I am a computer science student, currently enrolled in UCSD Full Stack Web Development Bootcamp. I used to study paleontology at NAU before changing majors to computer science. I live in San Diego, and love the outdoors.',
  social: {
    github: 'https://github.com/Vingrass',
  },
}

const projects = [
  {
    name: 'Web Development Quiz',
    description:
      'An quiz made to test the users knowldege of topics covered in the first few modules of UCSDs full stack web develoment Bootcamp',
    sourceCode: 'https://github.com/Vingrass/Online-Code-Quiz',
    livePreview: 'https://vingrass.github.io/Online-Code-Quiz/',
  },
]



export { header, contact, about, projects }
