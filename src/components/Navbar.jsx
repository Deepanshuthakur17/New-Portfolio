import React, { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-base-100/90 backdrop-blur-xl shadow-2xl py-3" : "bg-gradient-to-b from-black/60 via-black/20 to-transparent py-6"}`}>
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
        <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white drop-shadow-md">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">My</span> Portfolio
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <ul className={`flex gap-8 uppercase text-base font-bold tracking-widest transition-colors duration-300 ${scrolled ? "text-base-content" : "text-white"}`}>
            <li>
              <a href="#home" className={`relative group transition-all ${scrolled ? "hover:text-primary" : "hover:text-blue-300"}`}>
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#about" className={`relative group transition-all ${scrolled ? "hover:text-primary" : "hover:text-blue-300"}`}>
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#projects" className={`relative group transition-all ${scrolled ? "hover:text-primary" : "hover:text-blue-300"}`}>
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#contact" className={`relative group transition-all ${scrolled ? "hover:text-primary" : "hover:text-blue-300"}`}>
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 shadow-inner border group ${
              scrolled ? "bg-base-200 hover:bg-base-300 text-base-content border-base-300" : "bg-white/10 hover:bg-white/20 text-white border-white/20"
            }`}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Button & Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className={`w-9 h-9 flex items-center justify-center rounded-lg border transition-all ${
              scrolled ? "bg-base-200 text-base-content border-base-300" : "bg-white/10 text-white border-white/20"
            }`}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <button
            className={`p-2 transition-colors ${scrolled ? "text-base-content" : "text-white"}`}
            aria-label="menu-Open"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden"></div>
      )}

      {/* Mobile Sidebar Menu */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-2/3 bg-base-200 text-base-content shadow-lg transform ${menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden border-l border-base-300`}
      >
        <div className="flex justify-between items-center p-4 border-b border-base-300">
          <h2 className="text-lg font-black uppercase">Menu</h2>
          <button onClick={() => setMenuOpen(false)} aria-label="menu-close">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col uppercase text-lg font-bold p-4">
          <li className="py-3 border-b border-base-300">
            <a href="#home" className="hover:text-primary" onClick={() => setMenuOpen(false)}>Home</a>
          </li>
          <li className="py-3 border-b border-base-300">
            <a href="#about" className="hover:text-primary" onClick={() => setMenuOpen(false)}>About</a>
          </li>
          <li className="py-3 border-b border-base-300">
            <a href="#projects" className="hover:text-primary" onClick={() => setMenuOpen(false)}>Projects</a>
          </li>
          <li className="pt-3">
            <a href="#contact" className="hover:text-primary" onClick={() => setMenuOpen(false)}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

