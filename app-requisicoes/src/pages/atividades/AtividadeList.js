import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import '../../styles/login.css';
import '../../styles/1000px.css';
import '../../styles/1200px.css';
import '../../styles/1600px.css';
import '../../styles/1900px.css';





const AtividadeList = (props) => {
    return (
        <div className="App">
            <h4 className='headerAtividade'>Atividades</h4>

            <p></p>
            <div className='BotoesAtividade'>
                <Button label="Inserir" className="p-button-success" onClick={props.inserir} />&ensp;
                <Button label="Editar" className="p-button-warning" onClick={() => props.editar()}
                    disabled={!props.atividade._id} />&ensp;
                <Button label="Excluir" className="p-button-danger" onClick={() => props.excluir()}
                    disabled={!props.atividade._id} />
            </div>
            <p></p>

            <div className='cardTable'>
                <DataTable value={props.atividades}  paginator responsiveLayout="scroll"
                    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink 
                RowsPerPageDropdown"
                    currentPageReportTemplate="Mostrando de {first} até {last} de {totalRecords}"
                    rows={5} rowsPerPageOptions={[5, 10, 50]}
                    emptyMessage="Nenhuma atividade encontrada."
                    selectionMode="single" selection={props.atividade}
                    onSelectionChange={e => props.setAtividade(e.value)} dataKey="_id">
                    <Column field="_id" header="ID" sortable align={'center'} responsiveLayout></Column>
                    <Column field="titulo" header="Titulo" align={'center'} responsiveLayout></Column>
                    <Column field="descricao" header="Descrição" align={'center'} responsiveLayout></Column>
                    <Column field="status" header="Status" sortable align={'center'} responsiveLayout></Column>
                    <Column field="prazo" header="Prazo" align={'center'} responsiveLayout></Column>
                    <Column field="agendaInicio" header="Data/Hora Início" align={'center'} responsiveLayout></Column>
                    <Column field="dataHoraTermino" header="Data/Hora Fim" align={'center'} responsiveLayout></Column>
                    <Column field="requisicao.descricao" header="Requisição" align={'center'} responsiveLayout></Column>
                    <Column field='colaborador.nome' header="Colaborador" align={'center'} responsiveLayout></Column>
                </DataTable>
            </div>
        </div >
    );
};
export default AtividadeList;
