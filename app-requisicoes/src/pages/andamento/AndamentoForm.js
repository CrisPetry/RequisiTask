import React, { useEffect, useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext'
import { useForm } from 'react-hook-form';
import ColaboradorSrv from '../colaborador/ColaboradorSrv';
import AtividadeSrv from "../atividades/AtividadeSrv";


const AndamentoForm = (props) => {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        props.setAndamento({ ...props.andamento, [name]: value });
    };

    const [colaboradores, setColaboradores] = useState([]);
    const [atividades, setAtividades] = useState([]);

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

        AtividadeSrv.listar().then((response) => {
            setAtividades(response.data);
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
                <div className="cardAndamentoForm">
                    <h5 className="headerAndamentoForm">Cadastrar/Editar andamento</h5>
                    <div className="p-fluid grid formgrid">

                        <div className="field col-6 md:col-4">
                            <label htmlFor="dataHora">Data/Hora</label>
                            <Calendar name="dataHora" value={props.andamento.dataHora}
                                dateFormat="dd/mm/yy"
                                {...register("dataHora", {
                                    required: { value: false, message: "A Data/Hora é obrigatória." }
                                })}
                                onChange={handleInputChange}></Calendar>
                            {errors.dataHora && <span style={{ color: 'red' }}
                            >{errors.dataHora.message}</span>}
                        </div>

                        <div className="field col-12 md:col-4">
                            <label htmlFor="titulo">Título</label>
                            <InputText id="titulo" defaultValue={props.andamento.titulo}
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
                            <InputText id="descricao" defaultValue={props.andamento.descricao}
                                {...register("descricao", {
                                    required: { value: false, message: "A descricao é obrigatória." },
                                    minLength: { value: 2, message: "A descricao deve ter pelo menos 2 caractres" },
                                    maxLength: { value: 50, message: "A descricao de ter no máximo 50 caracteres" }
                                })}
                                onChange={handleInputChange} />
                            {errors.descricao && <span style={{ color: 'red' }}>{errors.descricao.message}</span>}
                        </div>

                        <div className="field col-12 md:col-4">
                            <label htmlFor="atividade">Atividade</label>
                            <Dropdown id="atividade" name="atividade" value={props.andamento.atividade}
                                onChange={handleInputChange} options={atividades}
                                optionLabel="titulo" optionValue="_id" placeholder="Selecione uma atividade" />
                            {errors.atividade && <span style={{ color: 'red' }}>{errors.atividade.message}</span>}
                        </div>

                        <div className="field col-12 md:col-4">
                            <label htmlFor="colaborador">Colaborador</label>
                            <Dropdown id="colaborador" name="colaborador" value={props.andamento.colaborador}
                                onChange={handleInputChange} options={colaboradores}
                                optionLabel="nome" optionValue="_id" placeholder="Selecione um colaborador" />
                            {errors.colaborador && <span style={{ color: 'red' }}>{errors.colaborador.message}</span>}
                        </div>
                    </div>
                    <p></p>
                </div>

                <div className="BotoesAndamentoForm">
                    <Button label="Salvar" className="p-button-success" type="submit" />
                    <Button label="Cancelar" className="p-button-danger" onClick={props.cancelar} />
                </div>
            </div>

        </form>

    );
};
export default AndamentoForm;
