import { Link } from 'react-scroll'
import heroImg from '../assets/heroImg.png'
import { IoIosArrowForward } from 'react-icons/io'

const Home = () => {
  return (
    <div name="home" className="w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center h-full px-4 pt-24 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-white text-4xl sm:text-7xl font-bold">I&apos;m a Frontend Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">I have one year of experiencce...</p>
          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <IoIosArrowForward size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={heroImg} alt="hero"  className="rounded-2xl mx-auto w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  )
}

export default Home
