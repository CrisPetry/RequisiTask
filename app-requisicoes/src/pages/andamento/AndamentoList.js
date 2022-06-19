import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';


const AndamentoList = (props) => {
    return (
        <div className="App">
            <h4 className='headerAndamento'>Status de andamento</h4>

            <p></p>
            <div className='BotoesAndamento'>
                <Button label="Inserir" className="p-button-success" onClick={props.inserir} />
                <Button label="Editar" className="p-button-warning" onClick={() => props.editar()}
                    disabled={!props.andamento._id} />
                <Button label="Excluir" className="p-button-danger" onClick={() => props.excluir()}
                    disabled={!props.andamento._id} />
            </div>
            <p></p>

            <DataTable value={props.andamentos} paginator responsiveLayout="scroll"
                paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink 
                RowsPerPageDropdown"
                currentPageReportTemplate="Mostrando de {first} até {last} de {totalRecords}"
                rows={5} rowsPerPageOptions={[5, 10, 50]}
                emptyMessage="Nenhuma atividade encontrada."
                selectionMode="single" selection={props.andamento}
                onSelectionChange={e => props.setAndamento(e.value)} dataKey="_id">

                <Column field="_id" header="ID" sortable align={'center'}></Column>
                <Column field="dataHora" header="Data/Hora" align={'center'}></Column>
                <Column field="titulo" header="Título" align={'center'}></Column>
                <Column field="descricao" header="Descrição" sortable align={'center'}></Column>
                <Column field="atividade.titulo" header="Atividade" align={'center'}></Column>
                <Column field="colaborador.nome" header="Colaborador" align={'center'}></Column>
            </DataTable>
        </div>
    );
};
export default AndamentoList;
