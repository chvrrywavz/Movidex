import { makeStyles } from '@mui/material'
import React from 'react'

const useStyles = makeStyles({
    page: {
        background: '#5E5C5E',
        width: '100%'
    }
})

export default function Layout({ children }) {
    return (
        <div>
            <div className='classes.page'>
            {children}
            </div>
        
        </div>
    )
}