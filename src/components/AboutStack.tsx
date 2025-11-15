import React from "react";

const AboutStack: React.FC = () => {
  return (
    <section className="about-stack">
      <h2>Acerca del Proyecto</h2>

      <p>
        Esta aplicación fue desarrollada utilizando <strong>React</strong> con{" "}
        <strong>TypeScript</strong>, empleando una arquitectura basada en
        componentes reutilizables.
      </p>

      <p>
        Los estilos están construidos con <strong>CSS puro</strong>, sin
        frameworks externos, para tener un mayor control del diseño y cumplir
        con los requisitos del examen.
      </p>

      <p>
        La aplicación consume una <strong>API pública real</strong> proveniente
        de <code>TheCocktailDB</code>, desde la cual se obtienen datos de
        cócteles, imágenes, categorías y detalles adicionales.
      </p>

      <p>
        Para mantener una estructura limpia, el consumo de la API se maneja en
        el archivo <code>api/productsApi.ts</code>, donde se realizan las
        funciones de obtención de lista general y detalles por ID.
      </p>

      <p>
        Además, la aplicación implementa:
      </p>

      <ul style={{ marginTop: "8px" }}>
        <li>Pantalla de bienvenida con logo, nombre y carnet.</li>
        <li>Paginación dinámica con puntos suspensivos.</li>
        <li>Cards con listado de productos obtenidos desde la API.</li>
        <li>Modal con información detallada del cóctel seleccionado.</li>
        <li>Diseño responsivo y centrado.</li>
      </ul>

      <p style={{ marginTop: "12px" }}>
        Este proyecto demuestra el uso de conceptos clave como manejo de estado,
        peticiones HTTP, composición de componentes, modularización y
        organización de una Single Page Application.
      </p>
    </section>
  );
};

export default AboutStack;
