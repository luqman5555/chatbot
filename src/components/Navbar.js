import React, {useState} from 'react'
//import Link from 'react-router-dom'
import logo from '../images/logo1.png'
import hamburger from '../images/hamdark.png'
import close from '../images/Frame.png'
const Navbar = () => {
  
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "use cases",
    },
    {
      id: 4,
      link: "contact us",
    },
  ];

  return (
    <div className='nav-container flex justify-between items-center pt-2'>

      <img src={logo} alt='' id='logo' />

      <div className="navitem md:flex justify-between items-center w-2/4">

        {links.map(({ id, link }) => (
          <div
            key={id}
          >
            <a className='capitalize font-semibold' href={link}>{link}</a>
          </div>
        ))}

      </div>

      <a className='capitalize flex items-center rounded-md text-white bg-blue-700 px-4 py-2' href='/'>Get Started</a>

      <div onClick={() => setNav(!nav)} className="toggler md:hidden">

        {nav ? <img src={close} alt='logo' width='50' height='50'/> : 
          <img src={hamburger} alt='logo' width='30' height='30'/>
        }

      </div>

      {nav && (

        <div className="mobilenav">

          {links.map(({ id, link }) => (
            <div
              key={id} className='mt-4'
            >
              <a className='capitalize' onClick={() => setNav(!nav)} href={link}>
                {link}
              </a>
            </div>
          ))}

        <a className='capitalize' href='/'>Contact Us</a>

        </div>

      )}
    
    </div>
  )
}

export {Navbar}