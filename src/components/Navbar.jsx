import { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const cartItemCount = 3;
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            {/* Navbar with Transparent Gradient Background */}
            <nav className="font-mono bg-gradient-to-r from-white to-gray-300 bg-opacity-50 p-4">
                <div className="container mx-auto flex justify-between items-center">

                    {/* Logo */}
                    <a href="#" className="text-black text-lg font-bold">YourLogo</a>

                    {/* Navbar Links (visible on large screens) */}
                    <div className="hidden md:flex justify-center items-center space-x-4">
                        <ul className="flex space-x-4">
                            <li><a href="#" className="text-black hover:text-gray-700 hover:scale-105 transition-all duration-300 ease-in-out hover:bg-white hover:p-3 hover:rounded-lg">Home</a></li>
                            <li><a href="#" className="text-black hover:text-gray-700 hover:scale-105 transition-all duration-300 ease-in-out hover:bg-white hover:p-3 hover:rounded-lg">Shop</a></li>
                            <li><a href="#" className="text-black hover:text-gray-700 hover:scale-105 transition-all duration-300 ease-in-out hover:bg-white hover:p-3 hover:rounded-lg">About Us</a></li>
                            <li><a href="#" className="text-black hover:text-gray-700 hover:scale-105 transition-all duration-300 ease-in-out hover:bg-white hover:p-3 hover:rounded-lg">Contact</a></li>
                        </ul>
                    </div>

                    {/* Icons on the right (visible on large screens) */}
                    <div className="hidden md:flex items-center space-x-6">

                        {/* Cart Icon */}
                        <div className="relative text-black hover:text-gray-500">

                            {/* Badge */}
                            {cartItemCount > 0 && (
                                <div className="absolute -top-3 -right-3 bg-green-300 text-stone-950 p-1 rounded-full">
                                    {cartItemCount}
                                </div>
                            )}

                            <span className='text-3xl'><FaShoppingCart /></span>
                        </div>

                        {/* Profile Icon */}
                        <div className="text-black">
                            <span className='text-3xl'><CgProfile /></span>
                        </div>

                    </div>

                    {/* Mobile Menu Button (visible on medium and small screens) */}
                    <div className="md:hidden">
                        <button onClick={toggleMobileMenu} className="text-black">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>

                </div>
            </nav>

            {/* Mobile Menu (hidden by default) */}
            <div className={`md:hidden ${isMobileMenuOpen ? '' : 'hidden'} bg-gradient-to-r from-white to-gray-300 bg-opacity-50 p-4`}>
                <ul className="flex flex-col space-y-2 items-center">
                    {/* Navigation Links (visible on medium and small screens) */}
                    <li><a href="#" className="text-black hover:text-gray-700 hover:scale-105 transition-all duration-300 ease-in-out">Home</a></li>
                    <li><a href="#" className="text-black hover:text-gray-700 hover:scale-105 transition-all duration-300 ease-in-out">Shop</a></li>
                    <li><a href="#" className="text-black hover:text-gray-700 hover:scale-105 transition-all duration-300 ease-in-out">About Us</a></li>
                    <li><a href="#" className="text-black hover:text-gray-700 hover:scale-105 transition-all duration-300 ease-in-out">Contact</a></li>
                    {/* Icons at the middle (visible on medium and small screens) */}
                    <li className="flex items-center space-x-2">
                        <div className="text-black">
                            <span className='text-2xl'><FaShoppingCart /></span>
                        </div>
                        <a href="#" className="text-black">Cart</a>
                    </li>
                    <li className="flex items-center space-x-2">
                        <div className="text-black">
                            <span className='text-2xl'><CgProfile /></span>
                        </div>
                        <a href="#" className="text-black">Profile</a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
