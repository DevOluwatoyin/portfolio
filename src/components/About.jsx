import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });
  
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-7xl px-4 pt-24 mx-auto flex flex-col justify-center w-full md:px-8">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl" data-aos="fade-right">
          Hello! I am <strong>Oluwatoyin Jolaoso</strong> from Abuja Nigeria. I
          am an enthusiastic frontend developer dedicated to creating
          captivating user experience through innovative web design. I have a
          strong foundation in HTML, CSS, and JavaScript and I specialize in
          building responsive, intuitive and interactive websites while
          optimizing performance and implementing modern frameworks.
        </p>

        <br />

        <p className="text-xl" data-aos="zoom-in">
          I do my best to bring clients&apos; visions to life while adhering to
          industry best practices. I am constantly seeking new challenges to
          expand my skill set and stay ahead in the ever-evolving web
          development technologies.
        </p>
      </div>
    </div>
  );
};

export default About;
