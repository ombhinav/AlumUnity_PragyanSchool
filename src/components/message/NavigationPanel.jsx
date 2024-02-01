import React from "react";
import { Link } from "react-router-dom";
import {
  BiHome,
  BiBookmark,
  BiMessage,
  BiCalendarEvent,
  BiFace,
} from "react-icons/bi";

const NavigationPanel = () => {
  return (
    <div className="hidden md:flex md:flex-col md:items-start">
      <NavItem to="/dashboard" icon={<BiHome />} label="Home" />
      <NavItem to="/messages" icon={<BiMessage />} label="Message" />
      <NavItem to="/saved" icon={<BiBookmark />} label="Saved Items" />
      <NavItem to="/profile" icon={<BiFace />} label="Profile" />
      <NavItem to="/events" icon={<BiCalendarEvent />} label="Events" />
      {/* Add more navigation items as needed */}
    </div>
  );
};

const NavItem = ({ to, icon, label }) => {
  return (
    <Link
      to={to}
      className="flex items-center space-x-4 cursor-pointer w-full py-2 transition duration-300 hover:bg-blue-500 hover:text-white hover:rounded-lg p-6"
    >
      <span className="text-gray-800">{icon}</span>
      <span>{label}</span>
    </Link>
  );
};

export default NavigationPanel;
