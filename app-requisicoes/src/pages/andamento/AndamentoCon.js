import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useRef } from "react";
import AndamentoList from "./AndamentoList";
import AndamentoForm from "./AndamentoForm";
import AndamentoSrv from "./AndamentoSrv";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";




function AndamentoCon() {
    const [andamentos, setAndamentos] = useState([]);
    const initialState = {
        id: null, dataHora: "", titulo: "", descricao: "",
        atividade: null, colaborador: null
    };
    const [andamento, setAndamento] = useState(initialState);
    const [editando, setEditando] = useState(false);
    const toastRef = useRef();

    useEffect(() => {
        onClickAtualizar();
    }, []);

    const onClickAtualizar = () => {
        AndamentoSrv.listar().then((response) => {
            setAndamentos(response.data);
        })
            .catch((e) => {
                console.log("Erro: " + e.message);
                toastRef.current.show({
                    severity: "error",
                    summary: e.message,
                    life: 3000,
                });
            });
    };

    const inserir = () => {
        setAndamento(initialState);
        setEditando(true);
    };

    const salvar = () => {
        if (andamento._id == null) {
            AndamentoSrv.incluir(andamento)
                .then((response) => {
                    setEditando(false);
                    onClickAtualizar();
                    toastRef.current.show({
                        severity: "success",
                        summary: "Salvou",
                        life: 2000,
                    });
                })
                .catch((e) => {
                    toastRef.current.show({
                        severity: "error",
                        summary: e.message,
                        life: 4000,
                    });
                });
        } else {
            AndamentoSrv.alterar(andamento)
                .then((response) => {
                    setEditando(false);
                    onClickAtualizar();
                    toastRef.current.show({
                        severity: "success",
                        summary: "Salvou",
                        life: 2000,
                    });
                })
                .catch((e) => {
                    toastRef.current.show({
                        severity: "error",
                        summary: e.message,
                        life: 4000,
                    });
                });
        }
    };

    const cancelar = () => {
        setEditando(false);
    };

    const editar = () => {
        setEditando(true);
    };

    const excluir = () => {
        confirmDialog({
            message: "Confirma a exclusão?",
            closable: false,
            icon: "pi pi-trash",
            acceptLabel: "Sim",
            rejectLabel: "Não",
            rejectClassName: "p-button-danger",
            acceptClassName: "p-button-success",
            accept: () => excluirConfirm(),
        });
    };

    const excluirConfirm = () => {
        AndamentoSrv.excluir(andamento._id)
            .then((response) => {
                onClickAtualizar();
                toastRef.current.show({
                    severity: "success",
                    summary: "Excluído",
                    life: 2000,
                });
            })
            .catch((e) => {
                toastRef.current.show({
                    severity: "error",
                    summary: e.message,
                    life: 4000,
                });
            });
    };


    if (!editando) {
        return (
            <div>
                <ConfirmDialog />
                <AndamentoList
                    andamentos={andamentos}
                    andamento={andamento}
                    setAndamento={setAndamento}
                    onClickAtualizar={onClickAtualizar}
                    inserir={inserir}
                    editar={editar}
                    excluir={excluir} />
                <Toast ref={toastRef} />
            </div>
        );
    } else {
        return (
            <div>
                <AndamentoForm
                    andamento={andamento}
                    setAndamento={setAndamento}
                    salvar={salvar}
                    cancelar={cancelar} />
                <Toast ref={toastRef} />
            </div>
        );
    }

}
export default AndamentoCon;
