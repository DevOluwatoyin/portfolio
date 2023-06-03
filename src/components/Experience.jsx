import { tech } from './variables/experience';

const Experience = () => {
  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full">
      <div className="max-w-7xl mx-auto px-4 pt-24 flex flex-col justify-center w-full text-white md:px-8">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">Experience</p>
          <p className="py-6">These are the technologies I have worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8">
          {tech.map(({id, icon, title, style}) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
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
