const LivrosList = (props) => (

    <div>
        <h4>Listagem de Livros</h4>
        <button onClick={props.onClickAtualizar} className="btn btn-primary btn-sm" type="button">Atualizar Lista</button>
        <button type="button" className="btn btn-primary btn-sm" onClick={props.inserir}>Inserir</button>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th><th>Titulo</th><th>Gênero</th><th>Autor</th><th>Quantidade</th><th>Preço</th>
                </tr>
            </thead>

            <tbody>
                {props.livros.length > 0 ? (props.livros.map((o, index) => (
                    <tr key={index}>
                        <td>{o._id}</td><td>{o.titulo}</td><td>{o.genero}</td><td>{o.autor}</td><td>{o.quantidade}</td><td>{o.precoUn}</td>
                        <td>
                            <button onClick={() => props.editar(o._id)} className="btn btn-primary btn-sm">Editar</button>
                            <button onClick={() => props.excluir(o._id)} className="btn btn-primary btn-sm">Excluir</button>
                        </td>
                    </tr>
                ))) : (
                    <tr><td colSpan={3}>Nenhum Livro.</td></tr>
                )}
            </tbody>
        </table>
    </div>
)

export default LivrosList