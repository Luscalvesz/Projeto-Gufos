//arquivo de configuracao de rotas
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'; //importar dependecias

// Importar páginas
import Categoria from './pages/Categoria'; //importando a pagina categoria 
import NotFound from './pages/NotFound'; // Importando a página de erro
import Eventos from './pages/Eventos';
import Login from './pages/Login';
import Usuario from './pages/Usuario';


const Rotas = (
    <Router>
        <div>
            <Switch>
            <Route exact path="/" component={App}/>{/*caminho da home*/}
            <Route path="/categoria" component={Categoria}/>
            <Route path="/eventos" component={Eventos}/>
            <Route path="/login" component={Login}/>
            <Route path="/usuario" component={Usuario}/>
            <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
)

//trocar a renderizacao chamando a variavel declarada acima
ReactDOM.render(Rotas, document.getElementById('root'));


serviceWorker.unregister();
