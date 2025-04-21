import { useState } from 'react';
import NavbarLogo from '../assets/Nav-Logo.svg';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo on the left */}
        <a href="/" className="navbar-logo">
          <div className="logo"> <img src={NavbarLogo} alt="Logo" className="logo-image" /></div>
        </a>
        
        {/* Menu centered */}
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
  <div className="navbar-item dropdown active">
    <button className="dropdown-btn active">
      Features <span className="dropdown-icon">▼</span>
    </button>
  </div>
  <div className="navbar-item dropdown">
    <button className="dropdown-btn">
      Solution <span className="dropdown-icon">▼</span>
    </button>
  </div>
  <div className="navbar-item dropdown">
    <button className="dropdown-btn">
      Resources <span className="dropdown-icon">▼</span>
    </button>
  </div>
  <div className="navbar-item">
    <a href="/pricing">Pricing</a>
  </div>
  <div className="navbar-item">
    <a href="/api">API</a>
  </div>
</div>


        {/* Buttons on the right */}
        <div className="navbar-buttons">
          <a href="/login" className="login-btn">Login</a>
          <a href="/get-started" className="get-started-btn">Get Started for Free</a>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`hamburger-bar ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`hamburger-bar ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`hamburger-bar ${isMenuOpen ? 'active' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
}