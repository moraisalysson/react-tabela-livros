import React from "react";

const TableBody = props => (
    <tbody>
        {props.livros.map( (livro, index) => (
            <tr key={livro.id }>
                <td>{ livro.id }</td>
                <td>{ livro.titulo }</td>
                <td>{ livro.autor }</td>
                <td>
                    <button className="bota remover">Remover</button>
                </td>
            </tr>
        ))}
        
    </tbody>
);

export default TableBody;