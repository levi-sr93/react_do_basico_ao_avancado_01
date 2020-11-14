import React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import Usuarios from './components/Usuarios/Usuarios';
import AdicionarUsuarios from './components/AdicionarUsuario/AdicionarUsuario';
import PaginaNaoEncontrada from './components/PaginaNaoEncontrada/PaginaNaoEncontrada';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>
                  Início
                </NavLink>
              </li>
              <li>
                <NavLink to="/usuarios">Usuários Cadastrados</NavLink>
              </li>
              <li>
                <NavLink to="/adicionar">Adicionar Usuários</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/usuarios" component={Usuarios} />
            <Route path="/adicionar" component={AdicionarUsuarios} />
            <Route path="*" component={PaginaNaoEncontrada} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
