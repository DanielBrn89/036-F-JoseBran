import React from "react";

const AboutStack: React.FC = () => {
  return (
    <section className="about-stack">
      <h2>Acerca del Stack</h2>
      <p>
        Este proyecto está desarrollado con <strong>React</strong> y{" "}
        <strong>TypeScript</strong> para el frontend.  
        El estilo se maneja con <strong>CSS puro</strong>.
      </p>
      <p>
        Más adelante se integrará una <strong>API de productos</strong>, la cual
        se consumirá desde un servicio en <code>api/productsApi.ts</code>.
      </p>
    </section>
  );
};

export default AboutStack;
