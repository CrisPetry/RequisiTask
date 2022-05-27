import React from "react";
const AndamentoForm = (props) => {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        props.setAndamento({ ...props.Andamento, [name]: value });
    };
    return (
        <form>
            <div class="form-group">
                <label>titulo</label>
                <input
                    class="form-control"
                    type="text"
                    name="titulo"
                    value={props.Andamento.descricao}
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
export default AndamentoForm;