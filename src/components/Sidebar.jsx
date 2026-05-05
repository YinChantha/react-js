import { useState } from 'react';
import { Home, Settings, User, Menu } from 'lucide-react';
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  const menus = [
    { title: "Home", icon: <Home />, path: "/" },
    { title: "About", icon: <User />, path: "/about" },
    { title: "Contact", icon: <Settings />, path: "/contact" },
  ];

  return (
    <div className={`bg-gray-900 h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
      
      <Menu 
        className="absolute cursor-pointer -right-3 top-9 w-7 border-2 rounded-full bg-white"
        onClick={() => setOpen(!open)}
      />

      <ul className="pt-6">
        {menus.map((menu, index) => (
          <Link to={menu.path} key={index}>
            <li className="flex items-center gap-x-4 p-2 hover:bg-gray-700 rounded-md text-gray-300 cursor-pointer">
              {menu.icon}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {menu.title}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}