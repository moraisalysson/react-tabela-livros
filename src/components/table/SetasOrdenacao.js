import React from "react";

const SetasOrdenacao = props => (
    <div className="container-setinhas">
        <div>
            <div onClick={() => props.setasOrdenarCrescente()}>&#129093;</div>
            <div onClick={() => props.setasOrdenarDecrescente()}>&#129095;</div>
        </div>
    </div>
);

export default SetasOrdenacao;