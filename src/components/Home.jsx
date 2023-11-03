import { Link } from 'react-scroll'
// import heroImg from '../assets/heroImg.png'
import heroImg from '../assets/hero.jpeg'
import { IoIosArrowForward } from 'react-icons/io'

const Home = () => {
  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center px-4 pt-24 gap-10 md:flex-row md:px-8">
        <div className="flex flex-col justify-center items-center md:items-baseline">
          <h2 className="w-full max-w-3xl text-white text-4xl font-bold text-center md:text-7xl md:text-left">
            I am a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have one year experience working with React, Nextjs and CSS
            frameworks like tailwind css and SCSS.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <IoIosArrowForward size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="rounded-2xl mx-auto w-2/3 md:max-w-xs overflow-hidden">
          <img
            src={heroImg}
            alt="hero"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Home
