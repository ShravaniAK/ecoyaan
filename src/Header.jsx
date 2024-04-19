
import { useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


function Header() {
  const navRef = useRef();
  const location = useLocation();

  
  const [showDropdown, setShowDropdown] = useState(false);



  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="p-4 flex justify-between items-center relative z-10">
      <Link to="/">
        <h3 className=" text-4xl">Ecoyaan</h3>
      </Link>

      <nav className="md:hidden">
        {/* Hamburger menu icon */}
        <button onClick={toggleDropdown} className="focus:outline-none">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Dropdown menu */}
        {showDropdown && (
          <div className="absolute top-full right-0 mt-2 bg-gray-800 rounded-md shadow-lg z-20">
            <Link
              to="/"
              className={`block px-4 py-2 text-white  ${
                location.pathname === '/' ? 'underline' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-4 py-2 text-white ${
                location.pathname === '/about' ? 'underline' : ''
              }`}
            >
              About US
            </Link>
            
            
           
          </div>
        )}
      </nav>

      <nav className="hidden md:flex items-center space-x-4">
        <Link to="/" className={` ${location.pathname === '/' ? 'underline' : ''}`}>
          Home
        </Link>
        <Link
          to="/about"
          className={` ${location.pathname === '/about' ? 'underline' : ''}`}
        >
         About Us
        </Link>
       
       
       
      </nav>
    </header>
  );
}

export default Header;
