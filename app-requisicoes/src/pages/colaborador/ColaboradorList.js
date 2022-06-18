import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';


const ColaboradorList = (props) => {
  return (
    <div className="App">
      <h4 className='Colaborador'>Colaboradores</h4>

      <p></p>

      <div className='BotoesColaborador'>
        <Button label="Inserir" className="p-button-success" onClick={props.inserir} />
        <Button label="Editar" className="p-button-warning" onClick={() => props.editar()} disabled={!props.colaborador._id} />
        <Button label="Excluir" className="p-button-danger" onClick={() => props.excluir()} disabled={!props.colaborador._id} />
      </div>
      <p></p>

      <DataTable value={props.colaboradores} paginator responsiveLayout="scroll"
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink 
        RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando de {first} até {last} de {totalRecords}"
        rows={5} rowsPerPageOptions={[5, 10, 50]}
        emptyMessage="Nenhum Colaborador encontrado."
        selectionMode="single" selection={props.colaborador}
        onSelectionChange={e => props.setColaborador(e.value)} dataKey="_id">
        <Column field="_id" header="ID" sortable align={'center'}></Column>
        <Column field="nome" header="Nome" sortable filter align={'center'}></Column>
        <Column field="email" header="E-mail" sortable filter align={'center'}></Column>
      </DataTable>
    </div>
  );
};
export default ColaboradorList;
