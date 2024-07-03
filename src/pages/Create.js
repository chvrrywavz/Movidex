import React from 'react'
import { Container, TextField, responsiveFontSizes } from '@mui/material';
import { Typography } from '@mui/material'
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { FilledInput } from '@mui/material';

{/*const useStyles = makeStyles({
  btn: {
    fontSizes: 60,
    backgroundColor: 'violet'

  }
})*/}

export default function Create() {
  //const classes = useStyles()

  return (
    <Container>
{/*<Typography 
      noWrap true
      variant='h1'
      color="primary"
      align="center"
      >
        nueva nota
      </Typography>*/}
      <div>
      <AppBar>
        <Toolbar>
          <Typography>
            Moviedex
          </Typography>
        </Toolbar>
        <Toolbar>
          <FilledInput>
          </FilledInput>
        </Toolbar>
      </AppBar>
      </div>
      <div>
      <form noValidate autoComplete='off'>
        <TextField/>
      </form>
      </div>
    </Container>
  )
}
