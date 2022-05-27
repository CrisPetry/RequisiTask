import React from "react";
const SolicitanteForm = (props) => {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        props.setSolicitante({ ...props.Solicitante, [name]: value });
    };
    return (
        <form>
            <div class="form-group">
                <label>Nome</label>
                <input
                    class="form-control"
                    type="text"
                    name="nome"
                    value={props.Solicitante.nome}
                    onChange={handleInputChange}
                />
            </div>
            <div class="form-group">
                <label>Email</label>
                <input
                    class="form-control"
                    type="text"
                    name="email"
                    value={props.Solicitante.email}
                    onChange={handleInputChange}
                />
            </div>
            <div class="form-group">
                <button
                    type="button"
                    onClick={props.salvar}
                    className="btn btn-primary btn-sm"
                >
                    Salvar
                </button>
                <button
                    type="button"
                    onClick={props.cancelar}
                    className="btn btn-primary btn-sm"
                >
                    Cancelar
                </button>
            </div>
        </form>
    );
};
export default SolicitanteForm;
