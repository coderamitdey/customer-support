import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "FAQ", path: "/faq" },
    { name: "Changelog", path: "/changelog" },
    { name: "Blog", path: "/blog" },
    { name: "Download", path: "/download" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
        {/* LEFT: Hamburger + Logo */}
        <div className="flex items-center gap-3">
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>

          <h1 className="text-3xl text-orange-500 font-bold">
            Cs-Ticket System
          </h1>
        </div>

        {/* CENTER: Links (md+) */}
        <ul className="hidden md:flex mx-auto gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT: Button (ALL screens) */}
        <div className="ml-auto">
          <button className="btn btn-primary">+ New Ticket</button>
        </div>
      </div>

      {/* MOBILE MENU (links only) */}
      {open && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="block hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
