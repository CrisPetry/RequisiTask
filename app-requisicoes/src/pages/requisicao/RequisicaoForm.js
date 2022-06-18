import React from "react";
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext'
import { useForm} from 'react-hook-form';
const RequisicaoForm = (props) => {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        props.setRequisicao({ ...props.requisicao, [name]: value });
    };
    const statusSelectItems = [
        { label: 'Aberto', value: 'Aberto' },
        { label: 'Em Andamento', value: 'Andamento' },
        { label: 'Concluido', value: 'Concluido' },
        { label: 'Cancelado', value: 'Cancelado' }
    ];

    const tipoRequisicaoSelectItems = [

    ];


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        props.salvar();
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div className="card">
                    <h5>Cadastro de requisição</h5>
                    <div className="p-fluid grid formgrid">

                        <div className="field col-12 md:col-4">
                            <label htmlFor="titulo">Titulo</label>
                            <InputText id="titulo" defaultValue={props.requisicao.titulo}
                                {...register("titulo", {
                                    required: { value: true, message: "O titulo é obrigatório." },
                                    minLength: { value: 2, message: "O titulo deve ter pelo menos 2 caractres" },
                                    maxLength: { value: 50, message: "O titulo de ter no máximo 50 caracteres" }
                                })}
                                onChange={handleInputChange} />
                            {errors.titulo && <span style={{ color: 'red' }}>{errors.titulo.message}</span>}
                        </div>

                        <div className="field col-12 md:col-4">
                            <label htmlFor="descricao">Descrição</label>
                            <InputText id="descricao" defaultValue={props.requisicao.descricao}
                                {...register("descricao", {
                                    required: { value: false, message: "A descricao é obrigatória." },
                                    minLength: { value: 2, message: "A descricao deve ter pelo menos 2 caractres" },
                                    maxLength: { value: 50, message: "A descricao de ter no máximo 50 caracteres" }
                                })}
                                onChange={handleInputChange} />
                            {errors.descricao && <span style={{ color: 'red' }}>{errors.descricao.message}</span>}
                        </div>

                        <div className="field col-12 md:col-4">
                            <label htmlFor="status">Status</label>
                            <Dropdown name="status" value={props.requisicao.status} options={statusSelectItems} placeholder="Selecionar Status"
                                {...register("status", {
                                    required: { value: false, message: "O status é obrigatória." }
                                })}
                                onChange={handleInputChange} />
                            {errors.status && <span style={{ color: 'red' }}>{errors.status.message}</span>}
                        </div>

                        <div className="field col-12 md:col-4">
                            <label htmlFor="tipoRequisicao">Tipo Requisição</label>
                            <Dropdown name="tipoRequisicao" value={props.requisicao.tipoRequisicao} options={tipoRequisicaoSelectItems} placeholder="Selecionar Tipo de requisição"
                                {...register("tipoRequisicao", {
                                    required: { value: false, message: "O status é obrigatória." }
                                })}
                                onChange={handleInputChange} />
                            {errors.tipoRequisicao && <span style={{ color: 'red' }}>{errors.tipoRequisicao.message}</span>}
                        </div>

                        <div className="field col-6 md:col-4">
                            <label htmlFor="dataHoraCriada">Data Hora Criada</label>
                            <Calendar name="dataHoraCriada" value={props.requisicao.dataHoraCriada} placeholder="Informe a Data"
                                {...register("dataHoraCriada", {
                                    required: { value: false, message: "A  Data Hora Criada é obrigatória." }
                                })}
                                onChange={handleInputChange}></Calendar>
                            {errors.dataHoraCriada && <span style={{ color: 'red' }}>{errors.dataHoraCriada.message}</span>}
                        </div>

                        <div className="field col-6 md:col-4">
                            <label htmlFor="prazoAtendimento">Prazo Atendimento</label>
                            <Calendar name="prazoAtendimento" value={props.requisicao.prazoAtendimento} placeholder="Informe o  Prazo Atendimento"
                                {...register("prazoAtendimento", {
                                    required: { value: false, message: "O Prazo Atendimento é obrigatório." }
                                })}
                                onChange={handleInputChange}></Calendar>
                            {errors.prazoAtendimento && <span style={{ color: 'red' }}>{errors.prazoAtendimento.message}</span>}
                        </div>



                    </div>
                    <p></p>
                </div>

                <div className="container d-flex justify-content-center">
                    <Button label="Salvar" className="p-button-raised p-button-success p-button-text" type="submit" />
                    <Button label="Cancelar" className="p-button-raised p-button-danger p-button-text" onClick={props.cancelar} />
                </div>
            </div>

        </form>

    );
};
export default RequisicaoForm;
