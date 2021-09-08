import { Paper, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';
import Controls from '../../components/controls/Controls';
import Popup from '../../components/Popup';
import EnhancedTable from '../../components/TableComponent';
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

const headCells = [
    { id: 'fullName', numeric: false, disablePadding: true, label: 'FullName' },
    { id: 'email', numeric: true, disablePadding: false, label: 'Email' },
    { id: 'mobileNum', numeric: true, disablePadding: false, label: 'Mobile Number' },
    { id: 'city', numeric: true, disablePadding: false, label: 'Doğum Yeri' }
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
                <EnhancedTable
                    sourceUrl="http://localhost:4000/api/v1/customers/list"
                    headCells={headCells}                    
                    title="Customer Page"                
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