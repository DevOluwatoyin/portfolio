import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialIcons = () => {
  const links = [
    {
      id: 1,
      icon: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/oluwatoyin-jolaoso-9aa8101a8",
      style: "rounded-tr-md"
    },
    {
      id: 2,
      icon: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/DevOluwatoyin"
    },
    {
      id: 3,
      icon: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:oluwatoyinjolaoso001@gmail.com"
    },
    {
      id: 4,
      icon: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true
    },
  ]

  return (
    <div className="lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({id, icon, href, style, download}) => (
          <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + " " + style}>
          <a href={href} target="_blank" rel="noreferrer" download={download} 
          className="flex justify-between items-center w-full text-white">
            {icon}
          </a>
        </li>
        ))}
        
      </ul>
    </div>
  )
}
 
export default SocialIcons
