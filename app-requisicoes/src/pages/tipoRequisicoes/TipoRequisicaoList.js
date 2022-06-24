import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import '../../styles/login.css';
import '../../styles/1000px.css';
import '../../styles/1200px.css';
import '../../styles/1600px.css';
import '../../styles/1900px.css';


const TipoRequisicaoList = (props) => {
    return (
        <div className="TipoRequisicao">
            <h4>Tipo de Requisições</h4>

            <p></p>
            <div id="Botoes">
                <Button label="Inserir" className="p-button-success"
                    onClick={props.inserir} />&nbsp;
                <Button label="Editar" className="p-button-warning"
                    onClick={() => props.editar()} disabled={!props.tipoRequisicao._id} />&nbsp;
                <Button label="Excluir" className="p-button-danger"
                    onClick={() => props.excluir()} disabled={!props.tipoRequisicao._id} />
            </div>
            <p></p>

            <div className='tabela'>
                <DataTable value={props.tipoRequisicoes} paginator responsiveLayout="scroll"
                    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink 
                LastPageLink RowsPerPageDropdown"
                    currentPageReportTemplate="Mostrando de {first} até {last} de {totalRecords}"
                    rows={5} rowsPerPageOptions={[5, 10, 50]}
                    emptyMessage="Nenhum Tipo Requisição encontrado." 
                    selectionMode="single" selection={props.tipoRequisicao}
                    onSelectionChange={e => props.setTipoRequisicao(e.value)} dataKey="_id">
                    <Column alignHeader={'center'} field="_id" header="ID" sortable align={'center'}></Column>
                    <Column alignHeader={'center'} field="descricao" header="Descrição" sortable align={'center'} filter></Column>
                </DataTable>
            </div>
        </div>
    );
};
export default TipoRequisicaoList;
