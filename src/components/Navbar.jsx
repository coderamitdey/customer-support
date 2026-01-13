import React from "react";

const Navbar = () => {
  return (
    <div className="shadow-sm">
      <div className="navbar bg-base-100 container mx-auto">
        {/* Left: Logo */}
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">CS Zone</a>
        </div>

        {/* Center: Menu for md+ */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a href="#">Home</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Changelog</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Download</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Right: New Ticket button + Mobile Hamburger */}
        <div className="navbar-end">
          {/* Desktop Button */}
          <div className="hidden md:block">
            <button className="btn btn-primary">New Ticket</button>
          </div>

          {/* Mobile Hamburger */}
          <div className="dropdown md:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><a href="#">Home</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Download</a></li>
              <li><a href="#">Contact</a></li>
              <li><button className="btn btn-primary w-full mt-2">New Ticket</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
