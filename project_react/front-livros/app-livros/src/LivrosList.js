const LivrosList = (props) => (

    <div>
        <h4>Listagem de Livros</h4>

        <button type="button" className="btn btn-success btn-sm" id="inserir" onClick={props.inserir}>Inserir</button>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th><th>Titulo</th><th>Gênero</th><th>Autor</th><th>Quantidade</th><th>Preço</th><th>Ações</th>
                </tr>
            </thead>

            <tbody>
                {props.livros.length > 0 ? (props.livros.map((o, index) => (
                    <tr key={index}>
                        <td>{index}</td><td>{o.titulo}</td><td>{o.genero}</td><td>{o.autor}</td><td>{o.quantidade}</td><td>{o.precoUn}</td>
                        <td>
                            <button onClick={() => props.editar(o._id)} className="btn btn-primary btn-sm" id="editar">Editar</button>
                            <button onClick={() => props.excluir(o._id)} className="btn btn-danger btn-sm" id="excluir">Excluir</button>
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