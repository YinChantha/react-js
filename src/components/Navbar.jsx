import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Brand</h1>
        <div className="space-x-4">
          <NavLink to="/" className={({ isActive }) => 
            isActive ? "text-blue-400 font-bold" : "hover:text-gray-300"
          }> Home </NavLink>
          <NavLink to="/about" className={({ isActive }) => 
            isActive ? "text-blue-400 font-bold" : "hover:text-gray-300"
          }> About </NavLink>
          <NavLink to="/contact" className={({ isActive }) => 
            isActive ? "text-blue-400 font-bold" : "hover:text-gray-300"
          }> Contact </NavLink>
        </div>
      </div>
    </nav>
  )
}
