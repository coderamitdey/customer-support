import { Facebook, Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        
        <div className="lg:col-span-2">
          <h1 className="font-bold text-orange-400 text-2xl mb-2">
            CS-Ticket System
          </h1>
          <p className="text-gray-400 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        <div>
          <h1 className="font-semibold mb-2">Company</h1>
          <p className="text-gray-400">About US</p>
          <p className="text-gray-400">Our Mission</p>
          <p className="text-gray-400">Contact Sales</p>
        </div>

        <div>
          <h1 className="font-semibold mb-2">Services</h1>
          <p className="text-gray-400">Products & Services</p>
          <p className="text-gray-400">Customer Stories</p>
          <p className="text-gray-400">Download Apps</p>
        </div>

        <div>
          <h1 className="font-semibold mb-2">Information</h1>
          <p className="text-gray-400">Privacy Policy</p>
          <p className="text-gray-400">Terms & Conditions</p>
          <p className="text-gray-400">Join Us</p>
        </div>

        <div className="md:col-span-1">
          <h1 className="font-semibold mb-2">Social Links</h1>
          <p className="text-gray-400 flex items-center gap-2">
            <Twitter size={16} /> @CS — Ticket System
          </p>
          <p className="text-gray-400 flex items-center gap-2">
            <Linkedin size={16} /> @CS — Ticket System
          </p>
          <p className="text-gray-400 flex items-center gap-2">
            <Facebook size={16} /> @CS — Ticket System
          </p>
          <p className="text-gray-400 flex items-center gap-2">
            <Mail size={16} /> support@cst.com
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
