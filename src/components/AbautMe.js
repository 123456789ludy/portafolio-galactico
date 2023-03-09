import { useSelector } from "react-redux";
import "../styles/AbautMe.css";
import React from "react";

const AbautMe = () => {
  const active = useSelector((state) => state.seeSection);
  return (
    <section id="AbautMe" className={`${active === "AbautMe" && "active"}`}>
      <h3 className="caption">Sobre mi</h3>
      <p className="paragraph">
        Hola, soy ingeniero de sistemas  desarrollador web enfocado en el frontend,bakend,full stack, amante de los
        videojuegos,la tecnologia y aficionado de las películas,deporte,musica. Siempre dispuesto a aprender
        nuevas tecnologías. Soy una persona autodidacta, proactiva, eficaz, que
        ama la tecnología. Actualmente, dedico mi tiempo a estudiar y
        desarrollar aplicaciones weby demas. Me encantan los desafíosy crecer cada dia de actualizarme en la tecnologia de nuevos aprendisajes de ing de sistemas.
      </p>
      <div className="myInfoCard">
        <div>
          <span>Edad</span>
          <p className="myInfoCardText">28</p>
        </div>
        <div>
          <span>País</span>
          <p className="myInfoCardText">BOLIVIA</p>
        </div>
        <div>
          <span>De pequeño jugaba con</span>
          <p className="myInfoCardText">FUTBOL Y MAS</p>
        </div>
        <div>
          <span>Me gustaría</span>
          <p className="myInfoCardText">Conocer el Mundo</p>
        </div>
      </div>
    </section>
  );
};

export default AbautMe;
