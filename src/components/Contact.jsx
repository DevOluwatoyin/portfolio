import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [sparkle, setSparkle] = useState(false);

  const handleClick = () => {
    setSparkle(true);
    setTimeout(() => {
      setSparkle(false);
    }, 300);
  };

  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="flex flex-col px-4 pt-24 justify-center max-w-7xl mx-auto md:px-8">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/05fe9ea6-d087-4045-ba6e-3b491a5a36a9"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <input
              type="text"
              required
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              required
              name="email"
              placeholder="Enter your email"
              className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              required
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <button
              type="submit"
              className={`text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 ${
                sparkle ? "sparkle" : ""
              }`}
              onClick={handleClick}
            >
              Let&apos;s talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
