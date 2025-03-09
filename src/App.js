import React, { Component } from "react";

import TableBody from "./components/table/TableBody";
import TableFoot from "./components/table/TableFoot";
import TableHead from "./components/table/TableHead";

class App extends Component {
  state = {
    livros: [
      {
        id: "978-3-16-148410-0",
        titulo: "O Mistério da Casa Azul",
        autor: "Carlos Almeida",
      },
      {
        id: "978-0-14-312779-6",
        titulo: "Segredos do Tempo",
        autor: "Mariana Souza",
      },
      {
        id: "978-1-86197-876-9",
        titulo: "A Jornada dos Sonhos",
        autor: "Fernando Lima",
      }
    ]
  }

  render() {
    return (
      <table className="tabela">
        <TableHead />
        <TableBody livros={ this.state.livros }/>
        <TableFoot />
      </table>
    );
  }
}

export default App;
