import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';


const RequisicaoList = (props) => {
    return (
        <div className="App">
            <h4>Listagem de Requisições</h4>

            <p></p>

            <Button label="Inserir" className="p-button-raised p-button-success p-button-text" onClick={props.inserir} />
            <Button label="Editar" className="p-button-raised p-button-warning p-button-text" onClick={() => props.editar()} disabled={!props.requisicao._id} />
            <Button label="Excluir" className="p-button-raised p-button-danger p-button-text" onClick={() => props.excluir()} disabled={!props.requisicao._id} />

            <p></p>

            <DataTable value={props.requisicoes} paginator responsiveLayout="scroll"
                paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                currentPageReportTemplate="Mostrando de {first} até {last} de {totalRecords}"
                rows={5} rowsPerPageOptions={[5, 10, 50]}
                emptyMessage="Nenhuma Requisição encontrada."
                selectionMode="single" selection={props.requisicao}
                onSelectionChange={e => props.setRequisicao(e.value)} dataKey="_id"
            >
                <Column field="_id" header="ID" sortable></Column>
                <Column field="titulo" header="Titulo" sortable filter ></Column>
                <Column field="descricao" header="Descrição" sortable filter ></Column>
                <Column field="status" header="Status" sortable filter ></Column>
                <Column field="dataHoraCriada" header="Data Hora Criada" sortable filter ></Column>
                <Column field="prazoAtendimento" header="Prazo Atendimento" sortable filter ></Column>
            </DataTable>



        </div>
    );
};
export default RequisicaoList;
