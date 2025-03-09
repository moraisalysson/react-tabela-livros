import React, { Component } from "react";

import TableBody from "./components/table/TableBody";
import TableFoot from "./components/table/TableFoot";
import TableHead from "./components/table/TableHead";

class App extends Component {
  state = {
    livros: [],
    erroMensagem: ''
  }
  
  componentDidMount() { //método do ciclo que é chamado após o componente ser montado e renderizado
    fetch("/api/livros.json") //fetch(url) retorna uma promise
    .then(response => response.json()) //recebe os dados
    .then(livros => this.setState({ livros })) //popula o objeto state
    .catch((erro) => this.setState({ erroMensagem: 'Erro ao buscar dados.' }))
    .finally(function() {
      console.log("Sempre retorna.");
    })
  }

  render() {
    return (
      <table className="tabela">
        <TableHead />
        <TableBody livros = { this.state.livros }/>
        <TableFoot 
          qtdLivros = { this.state.livros.length } 
          erroMensagem = { this.state.erroMensagem} 
        />
      </table>
    );
  }
}

export default App;
