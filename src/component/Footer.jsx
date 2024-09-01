import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationArrow, faMobile } from "@fortawesome/free-solid-svg-icons";
import { faMobileAndroid } from "@fortawesome/free-solid-svg-icons/faMobileAndroid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#111111] text-black dark:text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3  gap-8">
        <div className="col-span-1">
          <h2 className="text-2xl font-bold mb-4">Metaverse</h2>
          <p className=" text-black dark:text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            dolor illum a aut iste expedita.
          </p>
          <div className="mt-4">
            <a href="#" className="flex items-center">
              <FontAwesomeIcon className="mr-2" icon={faLocationArrow} />
              <span>Noida, Uttar Pradesh</span>
            </a>
            <a href="#" className="flex items-center mt-2">
              <FontAwesomeIcon className="mr-2" icon={faMobileAndroid} />
              <span>+91 123456789</span>
            </a>
          </div>
          <div className="mt-6">
            <a href="#" className="mr-2">
              <FontAwesomeIcon
                className="mr-2 text-3xl hover:text-primary cursor-pointer duration-300"
                icon={faFacebook}
              />
            </a>
            <a href="#" className="mr-2">
              <FontAwesomeIcon
                className="mr-2 text-3xl hover:text-primary cursor-pointer duration-300"
                icon={faInstagram}
              />
            </a>
            <a href="#" className="mr-2 text-3xl">
              <FontAwesomeIcon
                className="mr-2 text-3xl hover:text-primary cursor-pointer duration-300"
                icon={faLinkedin}
              />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
          <div className="col-span-1 py-8 px-4">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-primary cursor-pointer">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-primary cursor-pointer">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-primary cursor-pointer">
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-primary cursor-pointer">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 py-8 px-4">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-primary cursor-pointer ">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-primary cursor-pointer">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-primary cursor-pointer">
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-primary cursor-pointer">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 py-8 px-4">
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-primary cursor-pointer">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-primary cursor-pointer">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-primary cursor-pointer">
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-primary cursor-pointer">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Metaverse. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
