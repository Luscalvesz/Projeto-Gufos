import React from 'react';

function Cabecalho(){
    return(
        <header class="cabecalhoPrincipal">
        <div class="container">
          <img src={require("../assets/img/icon-login.png")} alt="logo projeto gufos"/>

          <nav class="cabecalhoPrincipal-nav">
            Administrador
          </nav>
        </div>
      </header>
    );
}
export default Cabecalho;