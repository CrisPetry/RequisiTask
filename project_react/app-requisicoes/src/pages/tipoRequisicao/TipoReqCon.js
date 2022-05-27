import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useRef } from "react";
import TipoReqList from "./TipoReqList";
import TipoReqForm from "./TipoReqForm";
import TipoReqSrv from "../../TipoReqSrv";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";



function TipoReqCon() {
    const [tiposReq, setTiposReq] = useState([]);
    const initialState = { id: null, descricao: "" };
    const [tipoReq, setTipoReq] = useState(initialState);
    const [editando, setEditando] = useState(false);
    const toastRef = useRef();

    useEffect(() => {
        onClickAtualizar(); // ao inicializar execula método para atualizar
    }, []);

    const onClickAtualizar = () => {
        TipoReqSrv.listar().then((response) => {
            setTiposReq(response.data);
            toastRef.current.show({
                severity: "success",
                summary: "tiposReq Atualizados!",
                life: 3000,
            });
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
        setTipoReq(initialState);
        setEditando(true);
    };

    const salvar = () => {
        if (tipoReq._id == null) { // inclusão
            TipoReqSrv.incluir(tipoReq)
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
            TipoReqSrv.alterar(tipoReq)
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

    const editar = (id) => {
        setTipoReq(
            tiposReq.filter((tipoReq) => tipoReq._id == id)[0]
        );
        setEditando(true);
    };

    const excluir = (_id) => {
        confirmDialog({
            message: "Confirma a exclusão?",
            header: "Confirmação",
            icon: "pi pi-question",
            acceptLabel: "Sim",
            rejectLabel: "Não",
            acceptClassName: "p-button-danger",
            accept: () => excluirConfirm(_id),
        });
    };

    const excluirConfirm = (_id) => {
        TipoReqSrv.excluir(_id)
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
                <TipoReqList
                    tiposReq={tiposReq}
                    tipoReq={tipoReq}
                    setTipoReq={setTipoReq}
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
                <TipoReqForm
                    tipoReq={tipoReq}
                    setTipoReq={setTipoReq}
                    salvar={salvar}
                    cancelar={cancelar}
                />
                <Toast ref={toastRef} />
            </div>
        );
    }

}
export default TipoReqCon;
