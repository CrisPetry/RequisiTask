import React, { useEffect, useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext'
import { useForm } from 'react-hook-form';
import ColaboradorSrv from '../colaborador/ColaboradorSrv';
import RequisicaoSrv from '../requisicao/RequisicaoSrv';


const AtividadeForm = (props) => {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        props.setAtividade({ ...props.atividade, [name]: value });
    };
    const statusSelectItems = [
        { label: 'Aberto', value: 'Aberto' },
        { label: 'Em Andamento', value: 'Em Andamento' },
        { label: 'Concluido', value: 'Concluido' },
        { label: 'Cancelado', value: 'Cancelado' }
    ];

    const [colaboradores, setColaboradores] = useState([]);
    const [Requisicoes, setRequisicoes] = useState([]);

    useEffect(() => {
        onClickAtualizar();
    }, []);

    const onClickAtualizar = () => {
        ColaboradorSrv.listar().then((response) => {
            setColaboradores(response.data);
        })
            .catch((e) => {
                console.log("Erro: " + e.message);
            });

        RequisicaoSrv.listar().then((response) => {
            setRequisicoes(response.data);
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
                <div className="cardAtividadeForm">
                    <h5 className="inserir">Cadastrar/Editar atividade</h5>
                    <div className="p-fluid grid formgrid">

                        <div className="field col-12 md:col-4">
                            <label htmlFor="titulo">Título</label>
                            <InputText id="titulo" defaultValue={props.atividade.titulo}
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
                            <InputText id="descricao" defaultValue={props.atividade.descricao}
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
                            <Dropdown name="status" value={props.atividade.status}
                                options={statusSelectItems} placeholder="Selecionar Status"
                                {...register("status", {
                                    required: { value: false, message: "O status é obrigatória." }
                                })}
                                onChange={handleInputChange} />
                            {errors.status && <span style={{ color: 'red' }}>{errors.status.message}</span>}
                        </div>

                        <div className="field col-6 md:col-4">
                            <label htmlFor="prazo">Prazo</label>
                            <Calendar name="prazo" value={props.atividade.prazo}
                                dateFormat="dd/mm/yy"
                                {...register("prazo", {
                                    required: { value: false, message: "O prazo é obrigatório." }
                                })}
                                onChange={handleInputChange}></Calendar>
                            {errors.prazo && <span style={{ color: 'red' }}
                            >{errors.prazo.message}</span>}
                        </div>

                        <div className="field col-6 md:col-4">
                            <label htmlFor="agendaInicio">Data/Início</label>
                            <Calendar name="agendaInicio" value={props.atividade.agendaInicio}
                                dateFormat="dd/mm/yy"
                                {...register("agendaInicio", {
                                    required: { value: false, message: "A Data de início é obrigatória." }
                                })}
                                onChange={handleInputChange}></Calendar>
                            {errors.agendaInicio && <span style={{ color: 'red' }}
                            >{errors.agendaInicio.message}</span>}
                        </div>

                        <div className="field col-6 md:col-4">
                            <label htmlFor="dataHoraTermino">Data/Término</label>
                            <Calendar name="dataHoraTermino" value={props.atividade.dataHoraTermino}
                                dateFormat="dd/mm/yy"
                                {...register("dataHoraTermino", {
                                    required: { value: false, message: "A Data de término é obrigatória." }
                                })}
                                onChange={handleInputChange}></Calendar>
                            {errors.dataHoraTermino && <span style={{ color: 'red' }}
                            >{errors.dataHoraTermino.message}</span>}
                        </div>


                        <div className="field col-12 md:col-4">
                            <label htmlFor="requisicao">Requisição</label>
                            <Dropdown id="requisicao" name="requisicao" value={props.atividade.requisicao}
                                onChange={handleInputChange} options={Requisicoes}
                                optionLabel="descricao" optionValue="_id" placeholder="Selecione uma requisição" />
                            {errors.requisicao && <span style={{ color: 'red' }}>{errors.requisicao.message}</span>}
                        </div>

                        <div className="field col-12 md:col-4">
                            <label htmlFor="colaborador">Colaborador</label>
                            <Dropdown id="colaborador" name="colaborador" value={props.atividade.colaborador}
                                onChange={handleInputChange} options={colaboradores}
                                optionLabel="nome" optionValue="_id" placeholder="Selecione um colaborador" />
                            {errors.colaborador && <span style={{ color: 'red' }}>{errors.colaborador.message}</span>}
                        </div>
                    </div>
                    <p></p>
                </div>

                <div className="BotoesAtividadeForm">
                    <Button label="Salvar" className="p-button-success" type="submit" />
                    <Button label="Cancelar" className="p-button-danger" onClick={props.cancelar} />
                </div>
            </div>

        </form>

    );
};
export default AtividadeForm;
