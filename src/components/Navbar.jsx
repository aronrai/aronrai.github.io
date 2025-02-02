import { useState, useRef, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
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
          <FiMenu size={30} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

