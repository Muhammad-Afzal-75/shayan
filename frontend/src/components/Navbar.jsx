import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Function to close the menu when a link is clicked
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="bg-[#E2E2E2] shadow-sm sticky top-0 z-50 w-full transition-all duration-300">
            <div className="w-full px-[20px]">
                <div className="flex justify-between items-center h-16">

                    {/* Left: Logo Section */}
                    <Link to="/" className="flex items-center cursor-pointer" onClick={handleLinkClick}>
                        <img
                            src={logo}
                            alt="SA Logo"
                            className="h-16 w-auto object-contain mix-blend-multiply transition-transform duration-300 hover:scale-105"
                        />
                        <span className="ml-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600 tracking-tight hidden lg:block">
                            SHAYAN ALUMINIUM & GLASS
                        </span>
                    </Link>

                    {/* Center: Navigation Links */}
                    <div className="hidden md:flex flex-grow justify-center items-center space-x-16">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'About', path: '/about' },
                            { name: 'Service', path: '/services' },
                            { name: 'Contact Us', path: '/contact' }
                        ].map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) =>
                                    `text-gray-700 font-bold text-base tracking-widest uppercase transition-all duration-300 relative group ${isActive ? 'text-blue-800' : 'hover:text-blue-800'}`
                                }
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
                            </NavLink>
                        ))}
                    </div>

                    {/* Right: Professional Button */}
                    <div className="hidden md:block">
                        <Link to="/contact">
                            <button className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-8 py-2.5 rounded-full font-bold text-xs tracking-widest hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                                LET'S TALK
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                {isOpen && (
                    <div className="md:hidden pb-6 pt-2 space-y-4 border-t border-gray-300 text-center bg-[#E2E2E2] shadow-xl rounded-b-lg">
                        <NavLink to="/" onClick={handleLinkClick} className="block text-gray-800 font-bold hover:text-blue-700 pt-2 transition-colors">HOME</NavLink>
                        <NavLink to="/about" onClick={handleLinkClick} className="block text-gray-800 font-bold hover:text-blue-700 transition-colors">ABOUT</NavLink>
                        <NavLink to="/services" onClick={handleLinkClick} className="block text-gray-800 font-bold hover:text-blue-700 transition-colors">SERVICE</NavLink>
                        <NavLink to="/contact" onClick={handleLinkClick} className="block text-gray-800 font-bold hover:text-blue-700 pb-2 transition-colors">CONTACT US</NavLink>
                        <Link to="/contact" onClick={handleLinkClick}>
                            <button className="bg-blue-700 text-white px-8 py-2 rounded-full font-bold text-sm hover:bg-blue-800 transition-colors mt-2 cursor-pointer">LET'S TALK</button>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;