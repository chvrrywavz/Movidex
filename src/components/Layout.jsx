import React from 'react';
import {makeStyles} from "@mui/styles";
import {useHistory, useLocation} from "react-router";

const useStyles = makeStyles({
    page: {
        backgroundColor: "#1E1E1E",
        width: "100%",
    },
})
export default function Layout ({children}) {

    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()
    return (

    )
}