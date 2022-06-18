import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useRef } from "react";
import RequisicaoList from "./RequisicaoList";
import RequisicaoForm from "./RequisicaoForm";
import RequisicaoSrv from "./RequisicaoSrv";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";



function RequisicaoCon() {
    const [requisicoes, setRequisicoes] = useState([]);
    const initialState = { id: null, titulo: "", descricao: "", dataHoraCriada: "", status: "", prazoAtendimento: "" };
    const [requisicao, setRequisicao] = useState(initialState);
    const [editando, setEditando] = useState(false);
    const toastRef = useRef();

    useEffect(() => {
        onClickAtualizar();
    }, []);

    const onClickAtualizar = () => {
        RequisicaoSrv.listar().then((response) => {
            setRequisicoes(response.data);
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
        setRequisicao(initialState);
        setEditando(true);
    };

    const salvar = () => {
        if (requisicao._id == null) { // inclusão
            RequisicaoSrv.incluir(requisicao)
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
            RequisicaoSrv.alterar(requisicao)
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
            closable:false,
            icon: "pi pi-trash",
            acceptLabel: "Sim",
            rejectLabel: "Não",
            rejectClassName: "p-button-danger",
            acceptClassName: "p-button-success",
            accept: () => excluirConfirm(),
        });
    };

    const excluirConfirm = () => {
        RequisicaoSrv.excluir(requisicao._id)
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
                <RequisicaoList
                    requisicoes={requisicoes}
                    requisicao={requisicao}
                    setRequisicao={setRequisicao}
                    onClickAtualizar={onClickAtualizar}
                    inserir={inserir}
                    editar={editar}
                    excluir={excluir}
                />
                <Toast ref={toastRef} />
            </div>
        );
    } else {
        return (
            <div>
                <RequisicaoForm
                    requisicao={requisicao}
                    setRequisicao={setRequisicao}
                    salvar={salvar}
                    cancelar={cancelar}
                />
                <Toast ref={toastRef} />
            </div>
        );
    }



}
export default RequisicaoCon;
