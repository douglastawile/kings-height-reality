"use client";

import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";

const Navigation = () => {
  return (
    <Navbar fluid rounded>
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
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
