import React, {Component} from 'react'; //importando objeto React 
import '../App.css'; // importando css
import Rodape from '../componentes/Rodape';//importando o componente Rodape

class Categoria extends Component {
    render(){
        return (
            <div className="App">
                <h1>Categoria</h1>
                <p>teste categoria</p>
                <Rodape/>{/*Usando o componente rodape*/}
            </div>
        )
    }
}
export default Categoria; //por padrao recebe o return e envia para o navegador 
