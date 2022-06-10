import React from 'react'
const LivrosForm = (props) => {
    const handleInputChange = (event) => {
        const { name, value } = event.target
        props.setLivro({ ...props.livro, [name]: value })
    }

    return (
        <form id="formulario">
            <body id="corpoForm">

                <div class="form-group">
                    <label>Título</label>
                    <input class="form-control" type="text" name="titulo"
                        value={props.livro.titulo} onChange={handleInputChange} />
                </div>

                <div class="form-group">
                    <label>Gênero</label>
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
                    <input class="form-control" type="text" name="quantidade"
                        value={props.livro.quantidade} onChange={handleInputChange} />
                </div>

                <div class="form-group">
                    <label>Preço</label>
                    <input class="form-control" type="text" name="precoUn"
                        value={props.livro.precoUn} onChange={handleInputChange} />
                </div>

                <div class="form-group">
                    <button type="button" id="salvar" onClick={props.salvar}
                        className="btn btn-success btn-sm">Salvar</button>
                    <button type="button" id="cancelar" onClick={props.cancelar}
                        className="btn btn-danger btn-sm">Cancelar</button>
                </div>
            </body>
        </form>
    )
}

export default LivrosForm