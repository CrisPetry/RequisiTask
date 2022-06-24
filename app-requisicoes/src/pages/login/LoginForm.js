import React, { useState, useRef } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useForm } from "react-hook-form";
import { Toast } from "primereact/toast";
import LoginSrv from "./LoginSrv";

const LoginForm = (props) => {

    const [credenciais, setCredenciais] = useState({ "email": "", "senha": "" })
    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setCredenciais({ ...credenciais, [id]: value });
    };
    const toastRef = useRef();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        LoginSrv.login(credenciais).then(response => {
            let token = response.data;
            if (token) {
                sessionStorage.setItem('token', token);
                window.location = "/";
            } else {
                toastRef.current.show({ severity: 'error', summary: 'Erro no login', life: 5000 });
            }
        }).catch(({ response }) => {
            toastRef.current.show({ severity: 'error', summary: response.data, life: 5000 });
        });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Toast ref={toastRef} />
            <div className="Auth-form-container">
                <div className="Auth-form">
                    <div className="Auth-form-content">
                        <h4 className="Auth-form-title">Login</h4>
                        <div className="form-group mt-3">
                            <label htmlFor="email">E-mail</label>
                            <InputText id="email" type={'email'}
                                className="form-control mt-1"
                                placeholder="Informe o e-mail"
                                defaultValue={credenciais.email}
                                {...register("email", {
                                    required: { value: true, message: "O email é obrigatório." },
                                    minLength: { value: 2, message: "O email deve ter pelo menos 2 caracteres." },
                                    maxLength: { value: 100, message: "O email deve ter no máximo 100 caracteres." }
                                })}
                                onChange={handleInputChange} />
                            {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="senha">Senha</label>
                            <InputText type={'password'}
                                id="senha" className="form-control mt-1"
                                placeholder="Informe a senha"
                                {...register("senha", {
                                    required: { value: true, message: "A senha é obrigatória." },
                                    minLength: { value: 4, message: "A senha deve ter pelo menos 4 caracteres." },
                                    maxLength: { value: 10, message: "A senha deve ter no máximo 10 caracteres." }
                                })}
                                onChange={handleInputChange}
                                defaultValue={credenciais.senha}
                            />
                            {errors.senha && <span style={{ color: 'red' }}>{errors.senha.message}</span>}
                        </div>
                    </div>

                    <div className="d-gap gap-1 mt-3">
                        <Button label="Entrar" id="entrar" type="submit" icon="pi pi-sign-in"
                            className="btn btn-primary"></Button>
                    </div>
                </div>
            </div>
        </form>
    );
};
export default LoginForm;

