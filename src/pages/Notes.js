import React from 'react'
import { Button } from '@mui/material'
import { TextField } from '@mui/material'
import { makeStyles } from '@mui/material'

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

export default function Notes() {

  const classes = useStyles()

  return (
    <div>
      <Button
      color='secondary' 
      variant="contained"
      >Hello world
      </Button>
      <form noValidate autoComplete='off'>
        <TextField
        className={classes.field}
        label="Escribe"
        variant='outlined'
        color='secondary'
        fullWidth
        required
        />
      </form>
    </div>
    
  )
}
