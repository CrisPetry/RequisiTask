import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';


const AndamentoList = (props) => {
    return (
        <div className="App">
            <h4>Listagem de Andamento</h4>

            <p></p>

            <Button label="Inserir" className="p-button-raised p-button-success p-button-text" onClick={props.inserir} />
            <Button label="Editar" className="p-button-raised p-button-warning p-button-text" onClick={() => props.editar()} disabled={!props.andamento._id} />
            <Button label="Excluir" className="p-button-raised p-button-danger p-button-text" onClick={() => props.excluir()} disabled={!props.andamento._id} />

            <p></p>

            <DataTable value={props.andamentos} paginator responsiveLayout="scroll"
                paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                currentPageReportTemplate="Mostrando de {first} até {last} de {totalRecords}"
                rows={5} rowsPerPageOptions={[5, 10, 50]}
                emptyMessage="Nenhum andamento encontrado."
                selectionMode="single" selection={props.andamento}
                onSelectionChange={e => props.setAndamento(e.value)} dataKey="_id"
            >
                <Column field="_id" header="ID" sortable></Column>
                <Column field="titulo" header="Titulo" sortable filter ></Column>
                <Column field="descricao" header="Descrição" sortable filter ></Column>
                <Column field="dataHora" header="Data Hora" sortable filter ></Column>
                <Column field="colaborador.nome" header="Colaborador" sortable filter ></Column>
                <Column field="atividade.descricao" header="Atividade" sortable filter ></Column>
            </DataTable>

        </div>
    );
};
export default AndamentoList;
