import { BsJustify } from "react-icons/bs"; 
import { BsScissors } from "react-icons/bs";
import {useState,useEffect} from 'react';


const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
/* function for remove navbaronscroll*/
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
      setToggle(false); 
    } else { // if scroll up show the navbar
      setToggle("");  
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY); 
  };

  /*useEffect for removeNavbaronscroll*/
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    // cleanup function
    return () => {
       window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  
  return (
    <div className="absolute z-10 w-full  padding-x py-8">
      <nav className='flex justify-between items-center max-container'>
        <a href="" className='text-gray-500 text-2xl font-clicker'>FLUCIDIA</a>
        <ul className='hidden sm:flex items-center justify-center font-montserrat '>
          <li className='mx-4 hover:text-sea-green font-semibold'><a href='#home'>HOME</a></li>
          <li className='mx-4 hover:text-sea-green font-semibold'><a href='#gallery'>MODELS</a></li>
           <li className='mx-4 hover:text-sea-green font-semibold'><a href='#contact'>CONTACT</a></li>
        </ul>
        <div className='flex items-center'>
        <a className="mx-4">Login</a>
        <div className="w-[2px] h-[15px] border border-sea-green" />
        <a className="mx-4">Registration</a>
    
        </div>
        
        {/* hamburger */}
          
        <div className='z-30 cursor-pointer sm:hidden flex'>
          {!toggle && <BsJustify size={30} color={'grey'}onClick={() => setToggle(true)} className='' />}
          {toggle && <BsScissors size={30} color={'green'} onClick={() => setToggle(false)} className='z-20' />}
        </div>
          
        {/* mobileMenu */}
        {toggle && (
      <div className='scale-in-ver-top absolute top-0 left-0 w-full h-70% flex justify-center items-center z-10 bg-black py-12 transition duration-500'>
        <ul className='flex flex-col justify-center items-center gap-10 text-white mt-10'>
          <li className='hover:text-gray-700' onClick={() => setToggle(false)} ><a href='#home'>HOME</a></li>
          <li className='hover:text-gray-700' onClick={() => setToggle(false)}><a href='#gallery'>MODELS</a></li>
           <li className='hover:text-gray-700' onClick={() => setToggle(false)}><a href='#contact'>CONTACT</a></li>
        </ul>
      </div>
        )}
      </nav>
    </div>
  )
}

export default Nav