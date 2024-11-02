import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 
        ${isScrolled ? "bg-white/50 backdrop-blur-md shadow-lg" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="z-50 flex flex-col sm:flex-row sm:justify-between items-center py-2 sm:py-0 sm:h-28">
          {/* Logo */}
          <div className="flex-shrink-0 mb-2 sm:mb-0">
            <img
              src={logo}
              alt="Vedshoka PG and Guest Houses"
              className="w-auto md:h-24 h-20"
            />
          </div>

          <nav className="flex flex-wrap justify-center gap-2 sm:gap-0 sm:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`
                  relative px-2 py-1 text-sm md:text-lg font-medium
                  transition-all duration-200 ease-in-out
                  hover:text-blue-600 hover:scale-105
                  ${
                    location.pathname === item.href
                      ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
                      : "text-gray-600"
                  }
                  active:scale-95
                  focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 rounded-md
                `}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
