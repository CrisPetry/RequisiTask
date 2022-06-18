import React from "react";
const AtividadeForm = (props) => {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        props.setAtividade({ ...props.atividade, [name]: value });
    };
    return (
        <div className="App">
            <h4 className='Atividades'>Atividades</h4>
            <form className="cardAtividadeForm">
                <div class="form-group">
                    <label>Título</label>
                    <input class="form-control" type="text" name="titulo" value={props.atividade.descricao}
                        onChange={handleInputChange} /></div>

                <div class="form-group">
                    <label>Descrição</label>
                    <input class="form-control" type="text" name="descricao" value={props.atividade.descricao}
                        onChange={handleInputChange} /></div>

                <div class="form-group">
                    <label>Status</label>
                    <input class="form-control" type="text" name="status" value={props.atividade.status}
                        onChange={handleInputChange} /></div>

                <div class="form-group">
                    <label>Prazo</label>
                    <input class="form-control" type="date" name="prazo" value={props.atividade.prazo}
                        onChange={handleInputChange} /></div>

                <div class="form-group">
                    <label>Início</label>
                    <input class="form-control" type="date" name="agendaInicio" value={props.atividade.agendaInicio}
                        onChange={handleInputChange} /></div>

                <div class="form-group">
                    <label>Término</label>
                    <input class="form-control" type="date" name="dataHoraTermino" value={props.atividade.agendaInicio}
                        onChange={handleInputChange} /></div>

                <div class="BotoesFormAtividade">
                    <button type="button" onClick={props.salvar} className="btn btn-success"> Salvar </button>

                    <button type="button" onClick={props.cancelar} className="btn btn-danger"> Cancelar </button>
                </div>
            </form >
        </div>

    );
};
export default AtividadeForm;
