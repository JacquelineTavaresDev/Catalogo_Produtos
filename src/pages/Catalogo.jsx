import React, { useState, useEffect } from "react";
import ProdutoCard from "../components/ProdutoCard";
import "./Catalogo.css";

import imagemPadrao from "../assets/sem-imagem.jpg";
import camisetaImg from "../assets/camiseta.jpg";
import tenisImg from "../assets/tenis.jpg";

const produtosIniciais = [
    {
        id: 1,
        nome: "Camiseta",
        preco: 59.9,
        descricao: "Camiseta 100% algodão",
        imagem: camisetaImg,
    },
    {
        id: 2,
        nome: "Tênis",
        preco: 199.9,
        descricao: "Tênis esportivo confortável",
        imagem: tenisImg,
    },
];

function Catalogo() {
    const [produtos, setProdutos] = useState([]);
    const [novoProduto, setNovoProduto] = useState({
        nome: "",
        preco: "",
        descricao: "",
        imagem: "",
    });
    
    useEffect(() => {
        const produtosSalvos = JSON.parse(localStorage.getItem("produtos") || "[]");
        setProdutos([...produtosIniciais, ...produtosSalvos]);
    }, []);
   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNovoProduto ((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!novoProduto.nome || !novoProduto.preco || !novoProduto.descricao) {
            alert("Preencha todos os campos obrigatórios!");
            return;
        }

        const produtoComId = {
            ...novoProduto,
            id: Date.now(),
            preco: parseFloat(novoProduto.preco),
            imagem: novoProduto.imagem.trim() !== "" ? novoProduto.imagem : imagemPadrao,
        };

        setProdutos((prev) => [...prev, produtoComId]);
        setNovoProduto({ nome: "", preco: "", descricao: "", imagem: "" });
    };

    const removerProduto = (id) => {
        const atualizados = produtos.filter((p) => p.id !== id);
        setProdutos(atualizados);
    };

    return (
        <div className="catalogo">
            <h1>Catálogo de Produtos</h1>

            <form onSubmit={handleSubmit} className="formulario">
                <h2>Cadastrar Novo Produto</h2>

                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome do produto"
                        value={novoProduto.nome}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        name="preco"
                        placeholder="Preço"
                        value={novoProduto.preco}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="descricao"
                        placeholder="Descrição"
                        value={novoProduto.descricao}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="imagem"
                        placeholder="URL da imagem (opcional)"
                        value={novoProduto.imagem}
                        onChange={handleChange}
                    />

                <button type="submit">Adicionar Produto</button>
            </form>
                
            <div className="lista-produtos">
                {produtos.length === 0 ? (
                    <p>Nenhum produto disponível.</p>
                ) : (
                    produtos.map((item) => (
                        <ProdutoCard
                            key={item.id}
                            nome={item.nome}
                            preco={item.preco}
                            imagem={item.imagem || imagemPadrao}
                            descricao={item.descricao}
                            onRemover={() => removerProduto(item.id)}
                        />
                    ))
                )}
            </div>            
        </div>        
    );
}

export default Catalogo;
