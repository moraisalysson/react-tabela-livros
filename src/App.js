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
      .finally(function () {
        console.log("Sempre retorna.");
      })
  }

  handleOrdenarCrescente = (cabecalho) => {
    switch (cabecalho) {
      case "titulo":
        const livrosTitulo = this.state.livros.sort((a, b) =>
          a.titulo < b.titulo ? -1 : 0); //ordem crescente
        this.setState({ livrosTitulo });
        break;

      case "isbn":
        const livrosIsbn = this.state.livros.sort((a, b) =>
          a.id < b.id ? -1 : 0); //ordem crescente
        this.setState({ livrosIsbn });
        break;

      case "autor":
        const livrosAutor = this.state.livros.sort((a, b) =>
          a.autor < b.autor ? -1 : 0); //ordem crescente
        this.setState({ livrosAutor });
        break;
      default:
        break;
    }
  }

  handleOrdenarDecrescente = (cabecalho) => {
    switch (cabecalho) {
      case "titulo":
        const livrosTitulo = this.state.livros.sort((a, b) =>
          a.titulo < b.titulo ? -1 : 0); //ordem crescente
        livrosTitulo.reverse();
        this.setState({ livrosTitulo });
        break;

      case "isbn":
        const livrosIsbn = this.state.livros.sort((a, b) =>
          a.id < b.id ? -1 : 0); //ordem crescente
        livrosIsbn.reverse();
        this.setState({ livrosIsbn });
        break;

      case "autor":
        const livrosAutor = this.state.livros.sort((a, b) =>
          a.autor < b.autor ? -1 : 0); //ordem crescente
        livrosAutor.reverse();
        this.setState({ livrosAutor });
        break;
      default:
        break;
    }
  }

  handleRemoverLinha = (id) => {
    const livros = this.state.livros.filter(l => l.id !== id);
    this.setState({ livros })
  }

  render() {
    return (
      <table className="tabela">
        <TableHead
          ordenarCrescente={this.handleOrdenarCrescente}
          ordenarDecrescente={this.handleOrdenarDecrescente}
        />
        <TableBody
          livros={this.state.livros}
          removerLinha={this.handleRemoverLinha}
        />
        <TableFoot
          qtdLivros={this.state.livros.length}
          erroMensagem={this.state.erroMensagem}
        />
      </table>
    );
  }
}

export default App;
