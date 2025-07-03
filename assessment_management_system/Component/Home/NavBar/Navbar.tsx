"use client";
import { useState } from 'react';
import Link from 'next/link';
import { X, Menu } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    return (
        
      <div className={`fixed w-full bg-blue-900 transition-all duration-300 h-[12vh] z-[1000] shadow-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="#home" className="text-4xl font-bold text-white mt-10 items-center hover:text-purple-500"><a>AMS Hub</a></Link>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 mt-10">
                <a href="#features" className="text-white hover:text-purple-400 px-3 py-2 rounded-md text-3x1 font-semibold">Features</a>
                <a href="#about" className="text-white hover:text-purple-400 px-3 py-2 rounded-md text-3x1 font-semibold">About</a>
                <a href="#testimonials" className="text-white hover:text-purple-400 px-3 py-2 rounded-md text-3x1 font-semibold">Testimonials</a>
                <Link href="/login" className="text-white hover:text-purple-400 px-3 py-2 rounded-md text-3x1 font-semibold">Be A Creator</Link>
                <Link href="/auth/signup" className="bg-primary border-secondary text-white hover:bg-green-800 px-4 py-2 rounded-md text-3x1 font-semibold">Get Started</Link>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-primary p-2"
              >
                {isMenuOpen ? <X className="w-8 h-8 mt-10" /> : <Menu className="w-8 h-8 mt-10" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t mt-8">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
              <a href="#features" className="bg-primary text-gray-600 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-semibold">Features</a>
              <a href="#about" className="bg-primary text-gray-600 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-semibold">About</a>
              <a href="#testimonials" className="bg-primary text-gray-600 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-semibold">Testimonials</a>
              <Link href="/login" className="bg-primary text-gray-600 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-semibold">Sign In</Link>
              <Link href="/auth/signup" className="bg-primary text-gray-600 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-semibold">Get Started</Link>
            </div>
          </div>
        )}
      </div>
    );
}
