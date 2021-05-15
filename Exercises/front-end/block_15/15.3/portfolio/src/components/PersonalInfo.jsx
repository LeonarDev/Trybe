import React from 'react';

import profileImg from '../images/profile-picture.png';
import githubIcon from '../images/github.svg';

import './PersonalInfo.css';

const PersonalInfo = () => (
  <aside id="personal-info">
    <img src={profileImg} alt="Minha Foto" width="200px" />
    <h2>Nome Completo</h2>
    <p>Rua da Minha Casa, N, Centro - Belo Horizonte - MG</p>
    <p>(31) 98765-4321</p>
    <p>nome.completo@email.com</p>
    <p>
      <a href="https://github.com/nome.completo" target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="GitHub" width="25px" />
      </a>
    </p>
  </aside>
);

export default PersonalInfo;
