import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';


const ColaboradorList = (props) => {
  return (
    <div className="App">
      <h4>Listagem de Colaboradores</h4>

      <p></p>

      <Button label="Inserir" className="p-button-raised p-button-success p-button-text" onClick={props.inserir} />
      <Button label="Editar" className="p-button-raised p-button-warning p-button-text" onClick={() => props.editar()} disabled={!props.colaborador._id} />
      <Button label="Excluir" className="p-button-raised p-button-danger p-button-text" onClick={() => props.excluir()} disabled={!props.colaborador._id} />

      <p></p>

      <DataTable value={props.colaboradores} paginator responsiveLayout="scroll"
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando de {first} até {last} de {totalRecords}"
        rows={5} rowsPerPageOptions={[5, 10, 50]}
        emptyMessage="Nenhum Colaborador encontrado."
        selectionMode="single" selection={props.colaborador}
        onSelectionChange={e => props.setColaborador(e.value)} dataKey="_id"
      >
        <Column field="_id" header="ID" sortable></Column>
        <Column field="nome" header="Nome" sortable filter ></Column>
        <Column field="email" header="Email" sortable filter ></Column>
      </DataTable>



    </div>
  );
};
export default ColaboradorList;
