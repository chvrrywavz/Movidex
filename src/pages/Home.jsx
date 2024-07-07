import React from 'react'
import {AppBar, TextField, Toolbar} from "@mui/material";

export default function Home() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <figure>
                        <img src="assets/logo/movidexLogo.png" alt="Movidex Logo" width="150" height="150" />
                    </figure>
                    <TextField id="outlined-basic" label="Buscar" variant="outlined" />
                </Toolbar>
            </AppBar>
        </div>
    );
}