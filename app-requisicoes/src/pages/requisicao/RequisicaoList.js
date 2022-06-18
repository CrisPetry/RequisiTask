import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';


const RequisicaoList = (props) => {
    return (
        <div className="App">
            <h4 className='headerRequisicao'>Requisições</h4>

            <p></p>
            <div className='BotoesReq'>
                <Button label="Inserir" className="p-button-success" onClick={props.inserir} />
                <Button label="Editar" className="p-button-warning" onClick={() => props.editar()} 
                disabled={!props.requisicao._id} />
                <Button label="Excluir" className="p-button-danger" onClick={() => props.excluir()} 
                disabled={!props.requisicao._id} />
            </div>
            <p></p>

            <DataTable value={props.requisicoes} paginator responsiveLayout="scroll"
                paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink 
                RowsPerPageDropdown"
                currentPageReportTemplate="Mostrando de {first} até {last} de {totalRecords}"
                rows={5} rowsPerPageOptions={[5, 10, 50]}
                emptyMessage="Nenhuma requisição encontrada."
                selectionMode="single" selection={props.requisicao}
                onSelectionChange={e => props.setRequisicao(e.value)} dataKey="_id">

                <Column field="_id" header="ID" sortable align={'center'}></Column>
                <Column field="titulo" header="Titulo" sortable filter align={'center'}></Column>
                <Column field="descricao" header="Descrição" sortable filter align={'center'}></Column>
                <Column field="dataHoraCriada" header="Data/Hora" align={'center'}></Column>
                <Column field="status" header="Status" align={'center'}></Column>
                <Column field="prazoAtendimento" header="Prazo" align={'center'}></Column>
                <Column field="solicitante.nome" header="Solicitante" align={'center'}></Column>
                <Column field="tipoRequisicao.descricao" header="TipoRequisição" align={'center'}></Column>
            </DataTable>
        </div>
    );
};
export default RequisicaoList;
