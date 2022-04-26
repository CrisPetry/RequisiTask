import React, { useState } from 'react';

function LivrosForm(props) {
    // Declare variáveis de state
    const handleInputChange = (event) => {
        const { name, value } = event.target
        props.setLivro({ ...props.livro, [name]: value })
    }

    return (
        <div>
            <form>
                <div class="form-group">
                    <label>Titulo</label>
                    <input class="form-control" type="text" name="titulo"
                        value={props.livro.titulo} onChange={handleInputChange} />
                </div>
                <div class="form-group">
                    <label>Genero</label>
                    <input class="form-control" type="text" name="genero"
                        value={props.livro.genero} onChange={handleInputChange} />
                </div>
                <div class="form-group">
                    <label>Autor</label>
                    <input class="form-control" type="text" name="autor"
                        value={props.livro.autor} onChange={handleInputChange} />
                </div>
                <div class="form-group">
                    <label>Quantidade</label>
                    <input class="form-control" type="number" name="quantidade"
                        value={props.livro.quantidade} onChange={handleInputChange} />
                </div>
                <div class="form-group">
                    <label>Preço</label>
                    <input class="form-control" type="number" name="precoUn"
                        value={props.livro.precoUn} onChange={handleInputChange} />
                </div>
                <div class="form-group">
                    <button type="button" onClick={props.onClickSalvar}
                        className="btn btn-primary btn-sm">Salvar</button>
                    <button type="button" onClick={props.onClickCancelar}
                        className="btn btn-primary btn-sm">Cancelar</button>
                </div>
            </form>


        </div>
    );
}

export default LivrosForm;