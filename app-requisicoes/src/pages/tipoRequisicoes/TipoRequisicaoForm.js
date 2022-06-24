import React from "react";
import { Button } from 'primereact/button';
import { useForm } from 'react-hook-form';
import { InputText } from 'primereact/inputtext'
import '../../styles/login.css';
import '../../styles/1000px.css';
import '../../styles/1200px.css';
import '../../styles/1600px.css';
import '../../styles/1900px.css';

const TipoRequisicaoForm = (props) => {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        props.setTipoRequisicao({ ...props.tipoRequisicao, [name]: value });
    };

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        props.salvar();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div className="cardForm">
                    <h5 className="inserir">Cadastrar tipos de requisição</h5>
                    <div className="p-fluid grid formgrid">
                        <div className="field col-6 md:col-4">
                            <label htmlFor="descricao">Descrição</label>
                            <InputText id="descricao" defaultValue={props.tipoRequisicao.descricao}
                                {...register("descricao", {
                                    required: { value: true, message: "A descricao é obrigatória." },
                                    minLength: { value: 10, message: "A descrição deve ter pelo menos 10 caractres" },
                                    maxLength: { value: 100, message: "A descrição deve ter no máximo 100 caracteres" }
                                })}
                                onChange={handleInputChange} />
                            {errors.descricao && <span style={{ color: 'red' }}>{errors.descricao.message}</span>}
                        </div>
                    </div>
                    <div className="BotoesForm">
                        <Button label="Salvar" className="p-button-success" type="submit" />&ensp;
                        <Button label="Cancelar" className="p-button-danger" onClick={props.cancelar} />
                    </div>
                    <p></p>
                </div>
            </div>
        </form>
    );
};
export default TipoRequisicaoForm;
