import React from 'react'
import {TextField} from "@mui/material";
import './others/Style.css';

export default function Home() {
    return (
        <div id="home">
            <figure id="logo">
                <img src="assets/logo/movidexLogo.png" alt="Movidex Logo" width="150" height="150" />
            </figure>
            <div id="searcher">
                <TextField id="filledSearch"
                           label="Buscar"
                           variant="filled"
                           fullWidth={true}
                           color="secondary"/>
            </div>
            <div id="titleBox">
                <h3 id="title">Bienvenido a</h3>
                <h2 id="title2">Movidex</h2>
            </div>
        </div>
    );
}