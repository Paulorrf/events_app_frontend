import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="flex mx-16 justify-between px-12 pt-4">
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/">abcabc</Link>
      </li>
      <li>
        <Link to="/">abcabc</Link>
      </li>
      <li>
        <Link to="/">abcabc</Link>
      </li>
    </ul>
  );
};

export default Navbar;
