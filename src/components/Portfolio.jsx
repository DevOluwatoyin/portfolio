import calculator from '../assets/portfolio/calculator.jpg'
import counter from '../assets/portfolio/reactCounter.jpg'
import movies from '../assets/portfolio/movieApp.jpg'

const Portfolio = () => {
  const portfolios =[
    {
      id: 1,
      src: calculator,
      demo: 'https://08yhgg.csb.app/',
      code: 'https://codesandbox.io/s/basic-arithmetic-calculator-08yhgg?file=/src/index.js'
    },
    {
      id: 2,
      src: counter,
      demo: 'https://altschool-exam-beta.vercel.app/',
      code: 'https://github.com/DevOluwatoyin/react-counter'
    },
    {
      id: 3,
      src: movies,
      demo: 'https://stately-gumption-b73c43.netlify.app/',
      code: 'https://github.com/DevOluwatoyin/movies'
    }
  ]
  return (
    <div name="portfolio"
    className="bg-gradient-to-b from-black to-gray-800 w-full text-white">
      <div className="max-w-7xl px-4 pt-24 mx-auto flex flex-col justify-center w-full md:px-8">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolios.map(({id, src, demo, code}) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden group">
            <img src={src} width={384} height={240} alt="calculator Ui" className="duration-200 group-hover:scale-105" />
            <div className="flex items-center justify-center">
              <a href={demo} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center">Demo</a>
              <a href={code} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center">Code</a>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
