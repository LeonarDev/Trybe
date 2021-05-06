import React from 'react';

import './Skills.css';

const Skills = () => (
  <section id="skills">
    <h3>Habilidade 1</h3>
    <div className="progress">
      <div className="step complete">Básico</div>
      <div className="step complete">Intermediário</div>
      <div className="step complete">Avançado</div>
    </div>

    <h3>Habilidade 2</h3>
    <div className="progress">
      <div className="step complete">Básico</div>
      <div className="step complete">Intermediário</div>
      <div className="step">Avançado</div>
    </div>

    <h3>Habilidade 3</h3>
    <div className="progress">
      <div className="step complete">Básico</div>
      <div className="step ">Intermediário</div>
      <div className="step">Avançado</div>
    </div>

    <h3>Habilidade 4</h3>
    <div className="progress">
      <div className="step complete">Básico</div>
      <div className="step complete">Intermediário</div>
      <div className="step complete">Avançado</div>
    </div>

    <h3>Habilidade 5</h3>
    <div className="progress">
      <div className="step complete">Básico</div>
      <div className="step complete">Intermediário</div>
      <div className="step">Avançado</div>
    </div>
  </section>
);

export default Skills;
