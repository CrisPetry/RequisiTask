import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';


const TipoRequisicaoList = (props) => {
    return (
        <div className="App">
            <h4>Listagem de Tipo de Requisições</h4>

            <p></p>

            <Button label="Inserir" className="p-button-raised p-button-success p-button-text" 
            onClick={props.inserir} />
            <Button label="Editar" className="p-button-raised p-button-warning p-button-text" 
            onClick={() => props.editar()} disabled={!props.tipoRequisicao._id} />
            <Button label="Excluir" className="p-button-raised p-button-danger p-button-text" 
            onClick={() => props.excluir()} disabled={!props.tipoRequisicao._id} />

            <p></p>

            <DataTable value={props.tipoRequisicoes} paginator responsiveLayout="scroll"
                paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink 
                LastPageLink RowsPerPageDropdown"
                currentPageReportTemplate="Mostrando de {first} até {last} de {totalRecords}"
                rows={5} rowsPerPageOptions={[5, 10, 50]}
                emptyMessage="Nenhum Tipo Requisição encontrado."
                selectionMode="single" selection={props.tipoRequisicao}
                onSelectionChange={e => props.setTipoRequisicao(e.value)} dataKey="_id"
            >
                <Column field="_id" header="ID" sortable></Column>
                <Column field="descricao" header="Descrição" sortable filter ></Column>
            </DataTable>



        </div>
    );
};
export default TipoRequisicaoList;
