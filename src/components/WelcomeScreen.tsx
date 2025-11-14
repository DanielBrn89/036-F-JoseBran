import React from "react";
import logo from "../assets/logo.png"; // usa el mismo logo del navbar

interface WelcomeScreenProps {
  onEnter: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onEnter }) => {
  return (
    <section className="welcome-container">
      <div className="welcome-card">
        <img src={logo} alt="Logo" className="welcome-logo" />

        <h1 className="welcome-name">Jose Daniel</h1>
        <p className="welcome-career">Ingeniería en Sistemas</p>
        <p className="welcome-id">Carnet: 1790-22-15044</p>

        <button className="welcome-button" onClick={onEnter}>
          Entrar al listado de productos
        </button>
      </div>
    </section>
  );
};

export default WelcomeScreen;
