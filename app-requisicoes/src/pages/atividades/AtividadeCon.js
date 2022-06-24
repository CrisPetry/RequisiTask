import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useRef } from "react";
import AtividadeList from "./AtividadeList";
import AtividadeForm from "./AtividadeForm";
import AtividadeSrv from "./AtividadeSrv";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";




function AtividadeCon() {
    const [atividades, setAtividades] = useState([]);
    const initialState = {
        id: null, titulo: "", descricao: "", status: "", prazo: "",
        agendaInicio: "", dataHoraTermino: "", requisicao: null, colaborador: null
    };
    const [atividade, setAtividade] = useState(initialState);
    const [editando, setEditando] = useState(false);
    const toastRef = useRef();

    useEffect(() => {
        onClickAtualizar();
    }, []);

    const onClickAtualizar = () => {
        AtividadeSrv.listar().then((response) => {
            setAtividades(response.data);
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
        setAtividade(initialState);
        setEditando(true);
    };

    const salvar = () => {
        if (atividade._id == null) {
            AtividadeSrv.incluir(atividade)
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
            AtividadeSrv.alterar(atividade)
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
        AtividadeSrv.excluir(atividade._id)
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
                <AtividadeList
                    atividades={atividades}
                    atividade={atividade}
                    setAtividade={setAtividade}
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
                <AtividadeForm
                    atividade={atividade}
                    setAtividade={setAtividade}
                    salvar={salvar}
                    cancelar={cancelar} />
                <Toast ref={toastRef} />
            </div>
        );
    }

}
export default AtividadeCon;
