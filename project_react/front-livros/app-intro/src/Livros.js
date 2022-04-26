import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LivrosList from "./LivrosList";
import LivrosForm from "./LivrosForm";

function Livros() {
    // Declare variáveis de state
    let livrosList = [
        { id: 1, titulo: "Sandman", genero: "Quadrinhos", autor: "Neil Gaiman", quantidade: 1, precoUn: 109.29 }
    ];
    const [livros, setLivros] = useState(livrosList);

    const onClickAtualizar = () => {
        livrosList = [
            { id: 1, titulo: 'Dagon', genero: 'Terror Cósmico', autor: 'H.P. Lovecraft', quantidade: 2, precoUn: 99.90 },
            { id: 2, titulo: 'Cemitério Maldito', genero: 'Terror', autor: 'Stephen King', quantidade: 12, precoUn: 49.90 },
            { id: 3, titulo: 'Coraline', genero: 'Suspense', autor: 'Neil Gaiman', quantidade: 5, precoUn: 99.90 }
        ];
        setLivros(livrosList);
    };

    // operação inserir
    const initialState = { id: null, nome: "", email: "", celular: "" };
    const [livro, setLivro] = useState(initialState);
    const [editando, setEditando] = useState(false);

    const onClickInserir = () => {
        setLivro(initialState);
        setEditando(true);
    };

    const onClickSalvar = () => {
        if (livro.id == null) {
            // inclusão
            livro.id = livros.length + 1;
            setLivros([...livros, livro]);
        } else {
            // alteração
            setLivros(
                livros.map((find) => (find.id === livro.id ? livro : find))
            );
        }
        setEditando(false);
    };
    const onClickCancelar = () => {
        setEditando(false);
    };

    const editar = (id) => {
        setLivro(livros.filter((livro) => livro.id == id)[0]);
        setEditando(true);
    };

    const excluir = (id) => {
        setLivros(livros.filter((livro) => livro.id !== id));
    };

    if (!editando) {
        return (
            <div>
                <LivrosList
                    livros={livros}
                    onClickAtualizar={onClickAtualizar}
                    onClickInserir={onClickInserir}
                    editar={editar}
                    excluir={excluir}
                />
            </div>
        );
    } else {
        return (
            <div>
                <LivrosForm
                    livro={livro}
                    setLivro={setLivro}
                    onClickSalvar={onClickSalvar}
                    onClickCancelar={onClickCancelar}
                />
            </div>
        );
    }
}

export default Livros;
