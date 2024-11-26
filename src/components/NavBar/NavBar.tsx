import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../../pictures/Logo.png";

const NavBar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);
    let dropdownTimeout: NodeJS.Timeout;

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleMouseEnter = () => {
        clearTimeout(dropdownTimeout);
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        dropdownTimeout = setTimeout(() => setDropdownOpen(false), 200);
    };

    return (
        <nav className="sticky top-0 w-full z-50 bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <Link to="/home" className="flex items-center m-4">
                    <img src={Logo} alt="Logo" className="h-10 w-auto mr-2" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 text-gray-600 mx-auto">
                    <Link to="/projects" className="hover:text-gray-800">Projects</Link>
                    <Link to="/sponsorship" className="hover:text-gray-800">Sponsorship</Link>
                    <Link to="/academics" className="hover:text-gray-800">Academics</Link>

                    {/* About with Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a className="hover:text-gray-800 cursor-pointer">About Us</a>

                        {/* Dropdown Menu */}
                        {dropdownOpen && (
                            <div
                                className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded">
                                <ul className="py-2">
                                    <li>
                                        <Link to="/about/staff"
                                              className="block px-4 py-2 hover:bg-gray-100 text-gray-800">Staff</Link>
                                        <Link to="/about/history"
                                              className="block px-4 py-2 hover:bg-gray-100 text-gray-800">History</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <Link to="/community" className="hover:text-gray-800">Community</Link>
                    <Link to="/volunteering" className="hover:text-gray-800">Volunteering</Link>
                </div>

                {/* Donate Button */}
                <button
                    className="hidden md:block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 m-4"
                    onClick={() => {
                        window.open("https://www.gofundme.com/f/construction-of-the-new-school-building", "_blank");
                    }}
                >
                    Donate Now
                </button>

                {/* Mobile Menu Icon */}
                <div className="flex items-center">
                    <button onClick={toggleMenu} className="md:hidden text-gray-800 focus:outline-none">
                        {menuOpen ? <FaTimes size={24}/> : <FaBars size={24}/>}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-gray-100 w-full shadow-md">
                    <ul className="flex flex-col items-center space-y-4 py-4 w-full">
                        <li className="w-full">
                            <Link to="/projects" className="block py-2 text-center w-full border-b border-gray-300 hover:bg-gray-200" onClick={toggleMenu}>Projects</Link>
                        </li>
                        <li className="w-full">
                            <Link to="/sponsorship" className="block py-2 text-center w-full border-b border-gray-300 hover:bg-gray-200" onClick={toggleMenu}>Sponsorship</Link>
                        </li>
                        <li className="w-full">
                            <Link to="/academics" className="block py-2 text-center w-full border-b border-gray-300 hover:bg-gray-200" onClick={toggleMenu}>Academics</Link>
                        </li>

                        {/* Mobile About Dropdown */}
                        <li className="w-full">
                            <div onClick={() => setMobileSubMenuOpen(!mobileSubMenuOpen)} className="block py-2 text-center w-full border-b border-gray-300 cursor-pointer hover:bg-gray-200">About Us</div>
                            {mobileSubMenuOpen && (
                                <ul className="w-full bg-gray-200">
                                    <li className="border-t border-gray-300">
                                        <Link to="/about/staff" className="block py-2 text-center w-full hover:bg-gray-300" onClick={toggleMenu}>Staff</Link>
                                        <Link to="/about/history" className="block py-2 text-center w-full hover:bg-gray-300" onClick={toggleMenu}>History</Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li className="w-full">
                            <Link to="/community" className="block py-2 text-center w-full border-b border-gray-300 hover:bg-gray-200" onClick={toggleMenu}>Community</Link>
                        </li>
                        <li className="w-full">
                            <Link to="/volunteering" className="block py-2 text-center w-full border-b border-gray-300 hover:bg-gray-200" onClick={toggleMenu}>Volunteering</Link>
                        </li>
                        <li className="w-full flex justify-center">
                            {/* Donate Button */}
                            <button
                                className="block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 m-4"
                                onClick={() => {
                                    window.open("https://www.gofundme.com/f/construction-of-the-new-school-building", "_blank");
                                }}
                            >
                                Donate Now
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
