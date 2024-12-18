"use client";

import { Link, NavLink } from "react-router-dom";
import { Navbar, DarkThemeToggle } from "flowbite-react";

const Navigation = () => {
  return (
    <Navbar
      fluid
      rounded
      className="fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
    >
      <Link to={`/`}>
        <Navbar.Brand as={"div"}>
          <img
            src="/logos/logo1.jpg"
            className="mr-3 h-10 w-10 sm:h-9 rounded-full"
            alt="Kings Height Reality"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            The Kings Height Reality
          </span>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle />
      <DarkThemeToggle />
      <Navbar.Collapse>
        <NavLink to={`/`}>
          <Navbar.Link as={"div"}>Home</Navbar.Link>
        </NavLink>

        <NavLink to={`/services`}>
          <Navbar.Link as={"div"}>Services</Navbar.Link>
        </NavLink>

        <NavLink to={`/about`}>
          <Navbar.Link as={"div"}>About</Navbar.Link>
        </NavLink>

        <NavLink to={`/contact`}>
          <Navbar.Link as={"div"}>Contact Us</Navbar.Link>
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
