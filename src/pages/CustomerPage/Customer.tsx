import React, {forwardRef, Fragment} from 'react';
import AddBox from '@material-ui/icons/AddBox';
import AddIcon from '@material-ui/icons/Add';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import MaterialTable from 'material-table';

const tableIcons = {
    Add: forwardRef<SVGSVGElement>((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef<SVGSVGElement>((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef<SVGSVGElement>((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef<SVGSVGElement>((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef<SVGSVGElement>((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef<SVGSVGElement>((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef<SVGSVGElement>((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef<SVGSVGElement>((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef<SVGSVGElement>((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef<SVGSVGElement>((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef<SVGSVGElement>((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef<SVGSVGElement>((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef<SVGSVGElement>((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef<SVGSVGElement>((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef<SVGSVGElement>((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef<SVGSVGElement>((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef<SVGSVGElement>((props, ref) => <ViewColumn {...props} ref={ref} />),
    AddIcon: forwardRef<SVGSVGElement>((props, ref) => <AddIcon {...props} ref={ref} />)
  };


export default class CustomerList extends React.Component {

    state = { person: [] };
    async componentDidMount() {
        try {
            const response = await fetch('http://localhost:4000/api/v1/customers/list');
            const data = await response.json();
            this.setState({ person: data.customerList, isLoading: false });
        } catch (error) {
            this.setState({ error: error.message, isLoading: false });
        }
    }
    render() {
      return (
        <Fragment>
          <MaterialTable
            columns={[
              { title: 'FullName', field: 'fullName' },
              { title: 'Email', field: 'email' },
              { title: 'Mobile Number', field: 'mobileNum', type: 'numeric' },
              { title: 'Doğum Yeri', field: 'city', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
            ]}
            data={this.state.person}
            title="Customers"
            options={{
              actionsColumnIndex: -1,
              selection: true,
              exportButton: true,
              showFirstLastPageButtons: true,
              pageSize: 5,
              padding: 'dense',
              pageSizeOptions: [5, 20, 50]
            }}
            icons= {tableIcons}
            detailPanel={[{
                tooltip: 'Show Name',
                render: rowData => {
                  return (
                    <div
                      style={{
                        fontSize: 100,
                        textAlign: 'center',
                        color: 'white',
                        backgroundColor: '#43A047',
                      }}
                    >
                      {rowData['fullName']}
                    </div>
                  )
                },
              }]}
              actions={[
                {
                  icon: () => <AddBox></AddBox>,
                  tooltip: 'Add User',
                  isFreeAction: true,
                  onClick: (event) => alert("You want to add a new row")
                }
              ]}
          />
        </Fragment>
      )
    }

    // render() {
    //     const persons = this.state.person.map((item, i) => (
    //         <div>
    //             <h1>{item['fullName']}</h1>
    //         </div>
    //     ));

    //     return (
    //         <div id="layout-content" className="layout-content-wrapper">
    //             <div className="panel-list">{persons}</div>
    //         </div>
    //     );
    // }
}