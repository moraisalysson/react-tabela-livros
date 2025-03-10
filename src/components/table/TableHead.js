import React from "react";
import SetasOrdenacao from "./SetasOrdenacao";

const TableHead = (props) => (
    <thead>
        <tr>
            <th colSpan="4">Tabela de Livros</th>
        </tr>
        <tr>
            <th>ISBN
                <SetasOrdenacao
                    setasOrdenarCrescente={props.ordenarCrescente}
                    setasOrdenarDecrescente={props.ordenarDecrescente}
                    cabecalho="isbn"
                />
            </th>
            <th>Título
                <SetasOrdenacao
                    setasOrdenarCrescente={props.ordenarCrescente}
                    setasOrdenarDecrescente={props.ordenarDecrescente}
                    cabecalho="titulo"
                />
            </th>
            <th>Autor
                <SetasOrdenacao
                    setasOrdenarCrescente={props.ordenarCrescente}
                    setasOrdenarDecrescente={props.ordenarDecrescente}
                    cabecalho="autor"
                />
            </th>
            <th></th>
        </tr>
    </thead>
);

export default TableHead;