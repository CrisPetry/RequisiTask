import React, { useEffect, useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext'
import { useForm } from 'react-hook-form';
import SolicitanteSrv from '../solicitante/SolicitanteSrv';
import TipoRequisicaoSrv from '../tipoRequisicoes/TipoRequisicaoSrv';


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

    const [solicitantes, setSolicitantes] = useState([]);
    const [tipoRequisicoes, setTipoRequisicoes] = useState([]);

    useEffect(() => {
        onClickAtualizar();
    }, []);

    const onClickAtualizar = () => {
        SolicitanteSrv.listar().then((response) => {
            setSolicitantes(response.data);
        })
            .catch((e) => {
                console.log("Erro: " + e.message);
            });

        TipoRequisicaoSrv.listar().then((response) => {
            setTipoRequisicoes(response.data);
        })
            .catch((e) => {
                console.log("Erro: " + e.message);
            });
    }


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        props.salvar();
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div className="cardReqForm">
                    <h5 className="cadastrar">Cadastrar/Editar requisição</h5>
                    <div className="p-fluid grid formgrid">

                        <div className="field col-12 md:col-4">
                            <label htmlFor="titulo">Título</label>
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
                            <label htmlFor="solicitante">Solicitante</label>
                            <Dropdown id="solicitante" name="solicitante" value={props.requisicao.solicitante}
                                onChange={handleInputChange} options={solicitantes}
                                optionLabel="nome" optionValue="_id" placeholder="Selecione um solicitante" />
                            {errors.solicitante && <span style={{ color: 'red' }}>{errors.solicitante.message}</span>}
                        </div>

                        <div className="field col-12 md:col-4">
                            <label htmlFor="tipoRequisicao">Tipo de Requisição</label>
                            <Dropdown id="tipoRequisicao" name="tipoRequisicao" value={props.requisicao.tipoRequisicao}
                                onChange={handleInputChange} options={tipoRequisicoes}
                                optionLabel="descricao" optionValue="_id" placeholder="Selecione um tipo de requisição" />
                            {errors.tipoRequisicao && <span style={{ color: 'red' }}>{errors.tipoRequisicao.message}</span>}
                        </div>

                        <div className="field col-6 md:col-4">
                            <label htmlFor="dataHoraCriada">Data/Hora</label>
                            <Calendar name="dataHoraCriada" value={props.requisicao.dataHoraCriada}
                                dateFormat="dd/mm/yy"
                                {...register("dataHoraCriada", {
                                    required: { value: false, message: "A  Data/Hora é obrigatória." }
                                })}
                                onChange={handleInputChange}></Calendar>
                            {errors.dataHoraCriada && <span style={{ color: 'red' }}>{errors.dataHoraCriada.message}</span>}
                        </div>

                        <div className="field col-6 md:col-4">
                            <label htmlFor="prazoAtendimento">Prazo</label>
                            <Calendar name="prazoAtendimento" value={props.requisicao.prazoAtendimento}
                                dateFormat="dd/mm/yy"
                                {...register("prazoAtendimento", {
                                    required: { value: false, message: "O Prazo Atendimento é obrigatório." }
                                })}
                                onChange={handleInputChange}></Calendar>
                            {errors.prazoAtendimento && <span style={{ color: 'red' }}>{errors.prazoAtendimento.message}</span>}
                        </div>



                    </div>
                    <p></p>
                </div>

                <div className="BotoesReq">
                    <Button label="Salvar" className="p-button-success" type="submit" />
                    <Button label="Cancelar" className="p-button-danger" onClick={props.cancelar} />
                </div>
            </div>

        </form>

    );
};
export default RequisicaoForm;
