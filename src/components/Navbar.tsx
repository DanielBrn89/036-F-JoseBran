import React from "react";
import logo from "../assets/logo.png"; // <---- importa el logo

interface NavbarProps {
  onNavigate: (section:  "inicio" | "stack") => void;

}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  return (
    <header className="navbar">
      <div className="navbar-left">

        {/* Logotipo REAL */}
        <img src={logo} alt="Logo" className="logo-img" />

        {/* Nombre y carrera */}
        <div className="user-info">
          <div className="user-name">Jose Daniel Bran Benito</div>
          <div className="user-career">Desarrollo Web 2025 - chiquimulilla, Santa Rosa</div>
        </div>
      </div>

      <nav className="navbar-links">
       <button onClick={() => onNavigate("inicio")}>Inicio</button>
        <button onClick={() => onNavigate("stack")}>Acerca de Stack</button>
      </nav>
    </header>
  );
};

export default Navbar;
