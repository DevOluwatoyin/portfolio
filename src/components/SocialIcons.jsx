import { useState, useEffect, useRef } from 'react'
import { BsArrowBarRight } from 'react-icons/bs'
import { links } from './variables/socials'

const SocialIcons = () => {
  
  const [social, socialOpen] = useState(false);
  let sidebarRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!sidebarRef.current.contains(e.target)) {
          socialOpen(false)
        }
    }

    document.addEventListener("click", handler)
  })

  return (
    <div>
      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
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
      <div ref={sidebarRef} className="flex lg:hidden flex-col top-[35%] left-0 fixed">
        <span onClick={() => socialOpen(!social)} className={`shake absolute flex text-lg bg-gray-500 text-white w-8 h-12 rounded-tr-lg rounded-br-lg items-center left-0 top-[12vh] ${social ? "hidden" : ''}`}>
          <BsArrowBarRight className="w-20" />
        </span>
        {social && (<ul>
          {links.map(({id, icon, href, style, download}) => (
            <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + " " + style}>
            <a href={href} target="_blank" rel="noreferrer" download={download} 
            className="flex justify-between items-center w-full text-white">
              {icon}
            </a>
          </li>
          ))}
        </ul>)}
      </div>
    </div>
  )
}
 
export default SocialIcons
