import React from "react";
import logo from "../../assets/images/logo.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import DarkMode from "../DarkMode";

const Navbar = () => {
  const NavLinks = [
    {
      id: 1,
      name: "Home",
      link: "#",
    },
    {
      id: 2,
      name: "Products",
      link: "#",
    },
    {
      id: 3,
      name: "Pricing",
      link: "#",
    },
    {
      id: 4,
      name: "Contact",
      link: "#",
    },
  ];

  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    // <header>
    <div className="header relative z-[9999] text-black dark:text-white duration-300">
      <div className="container py-2 md:py-0 ">
        <div className="flex justify-between items-center">
          {/* logo section */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="h-16" />
            <p className="text-3xl">
              VR <span className="font-bold">World</span>
            </p>
          </div>
          {/* Desktop Menu section */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NavLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className="text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500"
                  >
                    {name}
                  </a>
                </li>
              ))}
              {/* DarkMode Feature */}
              <DarkMode />
            </ul>
          </nav>
          {/* Mobile View Sidebar section */}
          <div className="md:hidden block">
            <div className="flex items-center gap-4">
              <DarkMode />
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer "
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    // </header>
  );
};

export default Navbar;
