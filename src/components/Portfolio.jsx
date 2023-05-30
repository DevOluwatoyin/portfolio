import calc from '../assets/portfolio/calculator.jpg'
import reactCounter from '../assets/portfolio/reactCounter.jpg'
import vueCounter from '../assets/portfolio/vueCounter.jpg'

const Portfolio = () => {
  const portfolios =[
    {
      id: 1,
      src: calc
    },
    {
      id: 2,
      src: reactCounter
    },
    {
      id: 3,
      src: vueCounter
    }
  ]
  return (
    <div name="portfolio"
    className="bg-gradient-to-b from-black to-gray-800 w-full text-white">
      <div className="max-w-7xl px-4 pt-24 mx-auto flex flex-col justify-center w-full md:px-8">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolios.map(({id, src}) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden group">
            <img src={src} width={384} height={240} alt="calculator Ui" className="duration-200 group-hover:scale-105" />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
