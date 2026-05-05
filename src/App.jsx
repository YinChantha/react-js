import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Viewdetail from "./components/pages/Viewdetail";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      {/* ***************** for navbar  */}
      {/* <Navbar />
      <div className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/viewdetail" element={<Viewdetail />} />
        </Routes>
      </div> */}


      {/* ***************** for sidebar  */}
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar (fixed left) */}
        <Sidebar />

        {/* Content (right side) */}
        <div className="flex-1 p-6 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
