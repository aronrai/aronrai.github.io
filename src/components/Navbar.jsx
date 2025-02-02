// import { useState, useRef, useEffect } from "react";
// import { FiMenu } from "react-icons/fi";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const navRef = useRef(null);

//   const handleClickOutside = (event) => {
//     if (navRef.current && !navRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     if (isOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isOpen]);

//   return (
//     <nav className="navbar" ref={navRef}>
//       <div className="nav-container">
//         <h1 className="logo">Aron Rai</h1>
//         <div className={`nav-links ${isOpen ? "active" : ""}`}>
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//           <Link to="/works">Works</Link>
//           <Link to="/contact">Contact</Link>
//         </div>
//         <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
//           <FiMenu />
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import { useState, useRef, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  // Function to handle click outside of the navbar (to close the menu)
  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false); // Close the menu when clicking outside
    }
  };

  useEffect(() => {
    // Add or remove the event listener based on the menu state
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close the sidebar when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar" ref={navRef}>
      <div className="nav-container">
        <h1 className="logo">Aron Rai</h1>
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <Link to="/" onClick={handleLinkClick}>Home</Link>
          <Link to="/about" onClick={handleLinkClick}>About</Link>
          <Link to="/works" onClick={handleLinkClick}>Works</Link>
          <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
        </div>
        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <FiMenu />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

