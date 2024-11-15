import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/itcsinfotech_new_logo1.webp';
import employeeMSImage from '../../public/output.png';
import { useServices } from '../../src/pages/services';

const Home: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const { services } = useServices();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && !buttonRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full bg-white p-4 shadow-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Company Logo" className="w-18 h-16" />
            <h1 className="ml-4 text-2xl font-bold text-gray-800">Employee Management System</h1>
          </div>

          {/* Hamburger Button for small screens */}
          <button
            onClick={toggleMenu}
            ref={buttonRef}
            className="text-1xl text-black lg:hidden"
          >
            &#9776;
          </button>

          <div className="hidden lg:flex space-x-6">
            <Link to="/reg" className="text-lg text-black">Register</Link>
            <Link to="/login" className="text-lg text-black">Login</Link>
          </div>
        </div>

        {menuOpen && (
          <div
            ref={menuRef}
            className="absolute top-16 right-6 bg-white text-black w-40 p-4 flex flex-col items-center space-y-4 rounded-lg shadow-lg"
          >
            <Link to="/reg" className="text-lg" onClick={toggleMenu}>
              Register
            </Link>
            <Link to="/login" className="text-lg" onClick={toggleMenu}>
              Login
            </Link>
          </div>
        )}
      </div>

      <div className="flex-grow flex flex-col items-center justify-center w-full px-6 bg-blue-400 text-center py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to Employee Management System
          </h1>
          <p className="text-lg text-white">
            Your one-stop solution for managing employee data
          </p>
        </header>

        <div className="mb-8">
          <img src={employeeMSImage} alt="Employee Management System" className="w-[90%] h-auto mx-auto" />
        </div>

        <div className="w-full mt-6 text-white">
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <ul>
            {services.map(service => (
              <li key={service.id} className="mb-3">
                <h3 className="font-semibold">{service.name}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full bg-white p-4 shadow-md">
        <footer className="text-center text-gray-800">
          <p className="text-sm">&copy; 2024 ITCSINFOTECH (OPC) PVT LTD. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
