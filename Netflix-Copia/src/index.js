import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/App';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/Categoria';


// Desafio da aula - colocar outra coisa alem da div
const Pagina404 = () => (<div>Erro 404, URL não encontrada</div>)


ReactDOM.render(
    <BrowserRouter>
      <Switch>
      <Route path="/" component={Home} exact />
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route path="/cadastro/categoria" component={CadastroCategoria} />
        <Route component={Pagina404} />
      </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);


