import html from '../assets/experience/html.jpg'
import css from '../assets/experience/css.jpg'
import javascript from '../assets/experience/javascript.jpg'
import scss from '../assets/experience/scss.jpg'
import tailwind from '../assets/experience/tailwind.png'
import reactimg from '../assets/experience/react.jpg'
import vue from '../assets/experience/vue.jpg'

const Experience = () => {

  const tech = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: "shadow-orange-500"
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: "shadow-blue-500"
    },
    {
      id: 3,
      src: javascript,
      title: 'Javascript',
      style: "shadow-yellow-500"
    },
    {
      id: 4,
      src: reactimg,
      title: 'React',
      style: "shadow-blue-600"
    },
    {
      id: 5,
      src: tailwind,
      title: 'Tailwind',
      style: "shadow-sky-400"
    },
    {
      id: 6,
      src: scss,
      title: 'SCSS',
      style: "shadow-orange-500"
    },
    {
      id: 7,
      src: vue,
      title: 'Vue',
      style: "shadow-green-500"
    },
    {
      id: 8,
      src: html,
      title: 'Github',
      style: "shadow-gray-400"
    },
  ]
  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full">
      <div className="max-w-7xl mx-auto p-4 pt-24 flex flex-col justify-center w-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">Experience</p>
          <p className="py-6">These are the technologies I&apos;ve worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8">
          {tech.map(({id, src, title, style}) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt="html" className="w-20 mx-auto"/>
            <p className="mt-4">{title}</p>
            </div>            
          ))}
        </div>
      </div>
    </div>
  )
}
export default Experience
