import React from "react";

const TableFoot = props => (
    <tfoot>
        <tr>
            <td colSpan="4">
                {props.erroMensagem !== '' ? <span style={{color: 'red', fontWeight: 'bold'}}>{ props.erroMensagem }</span> : `Quantidade de livros:  ${props.qtdLivros}` }
            </td>
        </tr>
    </tfoot>
);

export default TableFoot;