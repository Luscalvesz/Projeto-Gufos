import React, { Component } from 'react';
import '../App.css'; // importando css
import Rodape from '../componentes/Rodape';
import Cabecalho from '../componentes/cabecalho';
import '../assets/css/flexbox.css';
import '../assets/css/style.css';
import '../assets/css/reset.css';

class Eventos extends Component {
    render() {
        return (
            <div>
                
                <Cabecalho/>

                <main class="conteudoPrincipal">
                    <section class="conteudoPrincipal-cadastro">
                        <h1 class="conteudoPrincipal-cadastro-titulo">Eventos</h1>
                        <div class="container" id="conteudoPrincipal-lista">
                            <table id="tabela-lista">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Evento</th>
                                        <th>Data</th>
                                        <th>Acesso Livre</th>
                                        <th>Tipo do Evento</th>
                                    </tr>
                                </thead>

                                <tbody id="tabela-lista-corpo"></tbody>
                            </table>
                        </div>

                        <div class="container" id="conteudoPrincipal-cadastro">
                            <h2 class="conteudoPrincipal-cadastro-titulo">Cadastrar Evento</h2>
                            <div class="container">
                                <input type="text" id="evento__titulo" placeholder="título do evento" />
                                <input type="text" id="evento__data" placeholder="dd/MM/yyyy" />
                                <select id="option__acessolivre">
                                    <option value="1">Livre</option>
                                    <option value="0">Restrito</option>
                                </select>
                                <select id="option__tipoevento">
                                    <option value="0" disabled>Tipo do Evento</option>
                                </select>
                                <textarea rows="3" cols="50" placeholder="descrição do evento" id="evento__descricao"></textarea>
                            </div>
                            <button class="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro" onclick="cadastrarEvento()">Cadastrar</button>
                        </div>
                    </section>
                </main>
                <Rodape />
            </div>
        )
    }
}
export default Eventos;