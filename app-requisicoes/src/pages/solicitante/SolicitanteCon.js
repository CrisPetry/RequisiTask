import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useRef } from "react";
import SolicitanteList from "./SolicitanteList";
import SolicitanteForm from "./SolicitanteForm";
import SolicitanteSrv from "./SolicitanteSrv";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

function SolicitanteCon() {
    const [solicitantes, setSolicitantes] = useState([]);
    const initialState = { id: null, nome: "", email: "", senha: "" };
    const [solicitante, setSolicitante] = useState(initialState);
    const [editando, setEditando] = useState(false);
    const toastRef = useRef();

    useEffect(() => {
        onClickAtualizar(); // ao inicializar execula método para atualizar
    }, []);

    const onClickAtualizar = () => {
        SolicitanteSrv.listar().then((response) => {
            setSolicitantes(response.data);
            // toastRef.current.show({
            //   severity: "success",
            //   summary: "Solicitantes Atualizados!",
            //   life: 3000,
            // });
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
        setSolicitante(initialState);
        setEditando(true);
    };

    const salvar = () => {
        if (solicitante._id == null) { // inclusão
            SolicitanteSrv.incluir(solicitante)
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
        } else { // alteração
            SolicitanteSrv.alterar(solicitante)
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
            header: "Confirmação",
            icon: "pi pi-question",
            acceptLabel: "Sim",
            rejectLabel: "Não",
            acceptClassName: "p-button-danger",
            accept: () => excluirConfirm(),
        });
    };

    const excluirConfirm = () => {
        SolicitanteSrv.excluir(solicitante._id)
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
                <SolicitanteList
                    solicitantes={solicitantes}
                    solicitante={solicitante}
                    setSolicitante={setSolicitante}
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
                <SolicitanteForm
                    solicitante={solicitante}
                    setSolicitante={setSolicitante}
                    salvar={salvar}
                    cancelar={cancelar}
                />
                <Toast ref={toastRef} />
            </div>
        );
    }

}
export default SolicitanteCon;
