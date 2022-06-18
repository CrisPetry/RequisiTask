import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';


const AtividadeList = (props) => {
    return (
        <div className="App">
            <h4>Listagem de Atividades</h4>

            <p></p>

            <Button label="Inserir" className="p-button-raised p-button-success p-button-text" onClick={props.inserir} />
            <Button label="Editar" className="p-button-raised p-button-warning p-button-text" onClick={() => props.editar()} disabled={!props.atividade._id} />
            <Button label="Excluir" className="p-button-raised p-button-danger p-button-text" onClick={() => props.excluir()} disabled={!props.atividade._id} />

            <p></p>

            <DataTable value={props.atividades} paginator responsiveLayout="scroll"
                paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                currentPageReportTemplate="Mostrando de {first} até {last} de {totalRecords}"
                rows={5} rowsPerPageOptions={[5, 10, 50]}
                emptyMessage="Nenhuma Atividade encontrada."
                selectionMode="single" selection={props.atividade}
                onSelectionChange={e => props.setAtividade(e.value)} dataKey="_id"
            >
                <Column field="_id" header="ID" sortable></Column>
                <Column field="titulo" header="Titulo" sortable filter ></Column>
                <Column field="descricao" header="Descrição" sortable filter ></Column>
                <Column field="status" header="Status" sortable filter ></Column>
                <Column field="prazo" header="Prazo" sortable filter ></Column>
                <Column field="agendaInicio" header="Agenda Inicio" sortable filter ></Column>
                <Column field="dataHoraTermino" header="Data Hora Termino" sortable filter ></Column>
                <Column field="colaborador.nome" header="Colaborador" sortable filter ></Column>
                <Column field="requisicao.descricao" header="Requisicao" sortable filter ></Column>
            </DataTable>



        </div>
    );
};
export default AtividadeList;
