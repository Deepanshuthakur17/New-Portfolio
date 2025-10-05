import React, { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold uppercase btn-grad">My Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 uppercase">
          <li><a href="#home" className="hover:text-blue-500 nav-btn">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500 nav-btn">About</a></li>
          <li><a href="#projects" className="hover:text-blue-500 nav-btn">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500 nav-btn">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            // Close Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Menu Icon
            <div className="w-full h-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            </div>
          )}
        </button>
      </div>

      {/* Overlay (dark background) */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden"></div>
      )}

      {/* Mobile Sidebar Menu */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-2/3 bg-gradient-to-b from-gray-900 to-black text-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-lg font-black uppercase">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-6 mt-8 ml-6 uppercase text-lg font-bold"> <hr/>
          <li><a href="#home" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>Home</a></li> <hr />
          <li><a href="#about" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>About</a></li><hr />
          <li><a href="#projects" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>Projects</a></li><hr />
          <li><a href="#contact" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>Contact</a></li><hr />
        </ul>
      </div>
    </nav>
  );
}
