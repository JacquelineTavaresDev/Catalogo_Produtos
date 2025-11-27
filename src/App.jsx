import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import CardProduto from "./components/CardProduto/CardProduto";
import { lightTheme, darkTheme } from "./theme";
import camiseta from "./assets/camiseta.jpg";
import tenis from "./assets/tenis.jpg";
import semImagem from "./assets/sem-imagem.jpg";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
`;

const FormContainer = styled.div`
  margin: 16px 0;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
`;

const Botao = styled.button`
  padding: 10px 16px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  margin-top: 8px;
  margin-right: 8px;

  &:hover {
    opacity: 0.9;
  }
`;

export default function App() {
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nome: "Camisetas",
      descricao: "Camiseta 100% algodão, confortável e leve.",
      preco: 79.9,
      imagem: camiseta,
      adicionado: false,
    },
    {
      id: 2,
      nome: "Tênis Esportivo",
      descricao: "Tênis ideal para corridas e treinos diários.",
      preco: 249.9,
      imagem: tenis,
      adicionado: false,
    },
  ]);

  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    descricao: "",
    preco: "",
    imagem: "",
  });

  const [temaClaro, setTemaClaro] = useState(true);

  const handleAdicionar = (id) => {
    setProdutos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, adicionado: !p.adicionado } : p))
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovoProduto((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdicionarProdutoUsuario = () => {
    if (!novoProduto.nome || !novoProduto.descricao || !novoProduto.preco) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    const produto = {
      id: produtos.length + 1,
      nome: novoProduto.nome,
      descricao: novoProduto.descricao,
      preco: parseFloat(novoProduto.preco),
      imagem: novoProduto.imagem || semImagem,
      adicionado: false,
    };

    setProdutos([...produtos, produto]);
    setNovoProduto({ nome: "", descricao: "", preco: "", imagem: "" });
  };

  const toggleTema = () => setTemaClaro((prev) => !prev);

  return (
    <ThemeProvider theme={temaClaro ? lightTheme : darkTheme}>
      <FormContainer>
        <h3>Cadastrar Novo Produto</h3>
        <Input
          type="text"
          placeholder="Nome"
          name="nome"
          value={novoProduto.nome}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="Descrição"
          name="descricao"
          value={novoProduto.descricao}
          onChange={handleChange}
        />
        <Input
          type="number"
          placeholder="Preço"
          name="preco"
          value={novoProduto.preco}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="URL da imagem (opcional)"
          name="imagem"
          value={novoProduto.imagem}
          onChange={handleChange}
        />
        <div>
          <Botao onClick={handleAdicionarProdutoUsuario}>Adicionar Produto</Botao>
          <Botao onClick={toggleTema}>
            Alternar para {temaClaro ? "Dark Theme" : "Light Theme"}
          </Botao>
        </div>
      </FormContainer>

      <Container>
        {produtos.map((produto) => (
          <CardProduto
            key={produto.id}
            nome={produto.nome}
            descricao={produto.descricao}
            preco={produto.preco}
            imagem={produto.imagem}
            adicionado={produto.adicionado}
            onAdicionar={() => handleAdicionar(produto.id)}
          />
        ))}
      </Container>
    </ThemeProvider>
  );
}
