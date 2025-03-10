import React from "react";
import SetasOrdenacao from "./SetasOrdenacao";

const TableHead = (props) => (
    <thead>
        <tr>
            <th colSpan="4">Tabela de Livros</th>
        </tr>
        <tr>
            <th>ISBN</th>
            <th>Título
                <SetasOrdenacao
                    setasOrdenarCrescente={props.ordenarCrescente}
                    setasOrdenarDecrescente={props.ordenarDecrescente}
                />
            </th>
            <th>Autor</th>
            <th></th>
        </tr>
    </thead>
);

export default TableHead;