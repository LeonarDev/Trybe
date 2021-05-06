import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { AboutMe, ContactForm, Projects } from './components';

import './App.css';

const NavBar = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Sobre mim</Link>
        </li>
        <li>
          <Link to="/projects">Projetos</Link>
        </li>
        <li>
          <Link to="/contact">Entre em contato</Link>
        </li>
      </ul>
    </nav>
  </header>
);

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <AboutMe />
    </Route>

    <Route path="/contact">
      <ContactForm />
    </Route>

    <Route path="/projects">
      <Projects />
    </Route>

    <Route>
      <section>
        <h1>Página não encontrada</h1>
      </section>
    </Route>
  </Switch>
);

const App = () => (
  <div>
    <NavBar />
    <Routes />
  </div>
);

export default App;