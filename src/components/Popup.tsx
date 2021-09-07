import { DialogContent, DialogTitle } from '@material-ui/core';
import { Dialog } from '@mui/material';
import React from 'react'

export default function Popup(props: any){
    const {title, children, openPopup, setOpenPopup} = props;

    return(
        <Dialog open={openPopup}>
            <DialogTitle>
                <div>title goes here.</div>
            </DialogTitle>
            <DialogContent>
                <div>title goes here.</div>
            </DialogContent>
        </Dialog>
    )

}