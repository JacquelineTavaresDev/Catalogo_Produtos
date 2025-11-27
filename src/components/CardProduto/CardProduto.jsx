import React from "react";
import {
  Card,
  Imagem,
  Nome,
  Descricao,
  Preco,
  BotaoAdicionar
} from "./CardProduto.styles.js";

import imagemPadrao from "../../assets/sem-imagem.jpg";

export default function CardProduto({
  nome,
  descricao,
  preco,
  imagem,
  adicionado = false,
  onAdicionar
}) {
  return (
    <Card>
      <Imagem src={imagem || imagemPadrao} alt={nome} />
      <Nome>{nome}</Nome>
      <Descricao>{descricao}</Descricao>
      <Preco>R$ {preco.toFixed(2)}</Preco>
      <BotaoAdicionar $adicionado={adicionado} onClick={onAdicionar}>
        {adicionado ? "Adicionado" : "Adicionar ao carrinho"}
      </BotaoAdicionar>
    </Card>
  );
}
