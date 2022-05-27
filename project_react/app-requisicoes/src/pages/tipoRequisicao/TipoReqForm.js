import React from "react";
const TipoReqForm = (props) => {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        props.setTipoReq({ ...props.TipoReq, [name]: value });
    };
    return (
        <form>
            <div class="form-group">
                <label>Nome</label>
                <input
                    class="form-control"
                    type="text"
                    name="nome"
                    value={props.TipoReq.descricao}
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
export default TipoReqForm;
