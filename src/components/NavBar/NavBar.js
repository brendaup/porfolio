import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './NavBar.css'

export function NavBar() {
  return (
    <div className='root'>
        <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div" className="title">
            Brenda Armero Martínez
            </Typography>
            <Button color="inherit">Estudios</Button>
            <Button color="inherit">Acerda de mi</Button>
            <Button color="inherit">Contacto</Button>
        </Toolbar>
        </AppBar>
    </div>
  );
}
