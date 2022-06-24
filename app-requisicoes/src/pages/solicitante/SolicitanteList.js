import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';


const SolicitanteList = (props) => {
    return (
        <div className="App">
            <h4 className='Solicitante'>Solicitantes</h4>

            <p></p>

            <div className='BotoesSoli'>
                <Button label="Inserir" className="p-button-success" onClick={props.inserir} />&ensp;
                <Button label="Editar" className="p-button-warning" onClick={() => props.editar()} disabled={!props.solicitante._id} />&ensp;
                <Button label="Excluir" className="p-button-danger" onClick={() => props.excluir()} disabled={!props.solicitante._id} />
            </div>
            <p></p>

            <DataTable value={props.solicitantes} paginator responsiveLayout="scroll"
                paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink 
                LastPageLink RowsPerPageDropdown"
                currentPageReportTemplate="Mostrando de {first} até {last} de {totalRecords}"
                rows={5} rowsPerPageOptions={[5, 10, 50]}
                emptyMessage="Nenhum Solicitante encontrado."
                selectionMode="single" selection={props.solicitante}
                onSelectionChange={e => props.setSolicitante(e.value)} dataKey="_id">

                <Column field="_id" header="ID" sortable align={'center'}></Column>
                <Column field="nome" header="Nome" sortable align={'center'}></Column>
                <Column field="email" header="E-mail" filter align={'center'}></Column>
            </DataTable>
        </div>
    );
};
export default SolicitanteList;
