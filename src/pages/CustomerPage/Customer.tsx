import { Paper, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';
import Controls from '../../components/controls/Controls';
import Popup from '../../components/Popup';
import Table from '../../components/Table';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    },
    newButton: {
        position: 'absolute',
        right: '10px'
    }
}))

const customerColumns = 
[
    { title: 'FullName', field: 'fullName' },
    { title: 'Email', field: 'email' },
    { title: 'Mobile Number', field: 'mobileNum', type: 'numeric' },
    { title: 'Doğum Yeri', field: 'city', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
];
  
const customerTableOptions = {
    actionsColumnIndex: -1,
    selection: true,
    exportButton: true,
    showFirstLastPageButtons: true,
    pageSize: 5,
    padding: 'dense',
    pageSizeOptions: [5, 20, 50]
}
export default function CustomerList() {

    const classes = useStyles();
    const [openPopup, setOpenPopup] = React.useState(false);
    
    return (
        <>
            <Paper className={classes.pageContent}>
                <Toolbar>
                    <Controls.Button 
                        text="Add New"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        className={classes.newButton}
                        onClick={() => { setOpenPopup(true); }}
                    />
                </Toolbar>
                <Table
                    sourceUrl="http://localhost:4000/api/v1/customers/list"
                    columns={customerColumns}
                    title="Customer Page"
                    options={customerTableOptions}
                />
            </Paper>

            <Popup
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
            </Popup>
        </>
    )
}