import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function LivrosList(props) {
    return (
        <div>
            <h4>MANUTENÇÃO DE BOOKS</h4>

            <button onClick={props.onClickAtualizar}
                type="button" class="btn btn-primary btn-sm">Atualizar Lista</button>

            <button onClick={props.onClickInserir}
                type="button" class="btn btn-primary btn-sm">Inserir</button>

            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Titulo</th>
                        <th>Gênero</th>
                        <th>Autor</th>
                        <th>Quantidade</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {props.livros.length > 0 ? (
                        props.livros.map((o, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{o.titulo}</td>
                                <td>{o.genero}</td>
                                <td>{o.autor}</td>
                                <td>{o.quantidade}</td>
                                <td>{o.precoUn}</td>
                                <td>
                                    <button onClick={() => props.editar(o.id)} 
                                    className="btn btn-primary btn-sm">Editar</button>
                                    
                                    <button onClick={() => props.excluir(o.id)}
                                    className="btn btn-danger btn-sm">Excluir</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={3}>Nenhum livro encontrado.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default LivrosList;
