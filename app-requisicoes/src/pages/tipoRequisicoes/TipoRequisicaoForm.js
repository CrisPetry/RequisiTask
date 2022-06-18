import React from "react";
import { Button } from 'primereact/button';
import { useForm } from 'react-hook-form';
import { InputText } from 'primereact/inputtext'

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
                <div className="card">
                    <h5>Cadastro de tipos de requisições</h5>
                    <div className="p-fluid grid formgrid">

                        <div className="field col-12 md:col-4">
                            <label htmlFor="descricao">Descrição</label>
                            <InputText id="descricao" defaultValue={props.tipoRequisicao.descricao}
                                {...register("descricao", {
                                    required: { value: true, message: "A descricao é obrigatória." },
                                    minLength: { value: 2, message: "A descricaodeve ter pelo menos 2 caractres" },
                                    maxLength: { value: 50, message: "A descricao de ter no máximo 50 caracteres" }
                                })}
                                onChange={handleInputChange} />
                            {errors.descricao && <span style={{ color: 'red' }}>{errors.descricao.message}</span>}
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
export default TipoRequisicaoForm;
