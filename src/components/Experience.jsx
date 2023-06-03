import html from '../assets/experience/html.jpg'
import css from '../assets/experience/css.jpg'
import javascript from '../assets/experience/javascript.jpg'
import tailwind from '../assets/experience/tailwind.png'
import reactimg from '../assets/experience/react.jpg'

const Experience = () => {

  const tech = [
    {
      id: 1,
      src: html,
      icon: <i className="devicon-html5-plain text-color-html text-7xl md:text-[150px]"></i>,
      title: 'HTML',
      style: "shadow-color-html"
    },
    {
      id: 2,
      src: css,
      icon: <i className="devicon-css3-plain text-color-css text-7xl md:text-[150px]"></i>,
      title: 'CSS',
      style: "shadow-color-css"
    },
    {
      id: 3,
      src: javascript,
      icon: <i className="devicon-html5-plain text-color-javascript text-7xl md:text-[150px]"></i>,
      title: 'Javascript',
      style: "shadow-color-javascript"
    },
    {
      id: 4,
      src: reactimg,
      icon: <i className="devicon-html5-plain text-color-react text-7xl md:text-[150px]"></i>,
      title: 'React',
      style: "shadow-color-react"
    },
    {
      id: 5,
      src: tailwind,
      icon: <i className="devicon-html5-plain text-color-tailwind text-7xl md:text-[150px]"></i>,
      title: 'Tailwind',
      style: "shadow-color-tailwind"
    },
    {
      id: 6,
      src: html,
      icon: <i className="devicon-html5-plain text-color-github text-7xl md:text-[150px]"></i>,
      title: 'Github',
      style: "shadow-color-github"
    },
  ]
  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full">
      <div className="max-w-7xl mx-auto px-4 pt-24 flex flex-col justify-center w-full text-white md:px-8">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">Experience</p>
          <p className="py-6">These are the technologies I&apos;ve worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8">
          {tech.map(({id, icon, title, style}) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              {/* <img src={src} alt="html" className="w-20 mx-auto"/> */}
              
              <span>{ icon }</span>
            <p className="mt-4">{title}</p>
            </div>            
          ))}
        </div>
      </div>
    </div>
  )
}
export default Experience
