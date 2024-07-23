import React, { useEffect, useState } from "react";
import { navLinks } from "../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";

import { useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const Navbar = () => {
  const navigate=useNavigate();
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);
  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);
  return (
    <div
      className={`${
        active ? "shadow-lg bg-Solitude" : ""
      } fixed w-full top-0 left-0 z-20`}
    >
      <div>
        <div
          className={`${
            active ? "py-2 transition-all duration-300" : "py-4"
          } container  mx-auto flex items-center justify-between px-2`}
        >
          <div className="flex items-center gap-4">
            <HiMenuAlt1
              className="text-3xl sm:hidden cursor-pointer"
              onClick={() => setToggle(true)}
            />
            <div className="text-xl text-Teal uppercase tracking-wide font-bold">
              Nurture Her Well
            </div>
          </div>
          <div className="sm:flex items-center hidden">
            {navLinks.map((navLink) => {
              return <NavLink key={navLink.id} to={navLink.href} className="mr-8">{navLink.link}</NavLink>;
            })}
          </div>
          <button className="py-2 px-5  text-xs md:py-3 md:px-5 font-bold md:text-sm border border-solid rounded-lg border-gray" onClick={() => navigate('/register')}>
            Sign Up
          </button>
          <button className=" py-2 px-5  md:py-3 md:px-5 font-bold text-xs md:text-sm border border-solid rounded-lg border-gray" onClick={() => navigate('/login')}>
            Sign in
          </button>
          {toggle && (
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="fixed h-full w-96 top-0 left-0 z-20 bg-Teal text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8"
            >
              {navLinks.map((navLink) => {
                return (
                  <NavLink key={navLink.id} to={navLink.href} className="mr-8">{navLink.link}</NavLink>
                );
              })}

              <HiX
                className="absolute right-12 top-12 text-3xl cursor-pointer"
                onClick={(prev) => setToggle(!prev)}
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
