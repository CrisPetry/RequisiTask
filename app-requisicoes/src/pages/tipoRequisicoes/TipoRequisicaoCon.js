import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useRef } from "react";
import TipoRequisicaoList from "./TipoRequisicaoList";
import TipoRequisicaoForm from "./TipoRequisicaoForm";
import TipoRequisicaoSrv from "./TipoRequisicaoSrv";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

function TipoRequisicaoCon() {
    const [tipoRequisicoes, setTipoRequisicoes] = useState([]);
    const initialState = { id: null, descricao: "" };
    const [tipoRequisicao, setTipoRequisicao] = useState(initialState);
    const [editando, setEditando] = useState(false);
    const toastRef = useRef();

    useEffect(() => {
        onClickAtualizar();
    }, []);

    const onClickAtualizar = () => {
        TipoRequisicaoSrv.listar().then((response) => {
            setTipoRequisicoes(response.data);

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
        setTipoRequisicao(initialState);
        setEditando(true);
    };

    const salvar = () => {
        if (tipoRequisicao._id == null) { 
            TipoRequisicaoSrv.incluir(tipoRequisicao)
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
            TipoRequisicaoSrv.alterar(tipoRequisicao)
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
            icon: "pi pi-trash",
            closable: false, 
            acceptLabel: "Sim",
            rejectLabel: "Não",
            rejectClassName: "p-button-danger",
            acceptClassName: "p-button-success",
            accept: () => excluirConfirm(),
        });
    };

    const excluirConfirm = () => {
        TipoRequisicaoSrv.excluir(tipoRequisicao._id)
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
                <TipoRequisicaoList
                    tipoRequisicoes={tipoRequisicoes}
                    tipoRequisicao={tipoRequisicao}
                    setTipoRequisicao={setTipoRequisicao}
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
                <TipoRequisicaoForm
                    tipoRequisicao={tipoRequisicao}
                    setTipoRequisicao={setTipoRequisicao}
                    salvar={salvar}
                    cancelar={cancelar}
                />
                <Toast ref={toastRef} />
            </div>
        );
    }

}
export default TipoRequisicaoCon;
