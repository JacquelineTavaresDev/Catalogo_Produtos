import React from "react";

function ProdutoCard ({ nome, preco, imagem, descricao, onRemover }) {
    return (
        <div className="produto-card">
            <img src={imagem} alt={nome} className="produto-imagem"/>
            <h3>{nome}</h3>
            <p>{descricao}</p>
            <strong>R$ {preco.toFixed(2)}</strong>
            <button className="btn-remover" onClick={onRemover}>Remover</button>
        </div>
    );
}

export default ProdutoCard;

