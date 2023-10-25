import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './NavBar.css'
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';


//Incluyo el color de los botones del NavBar
const theme = createTheme({
  palette: {
    primary: {
      main: '#F0EECD',
    },
    secondary: {
      main: '#F0EECD',
    },
  },
});

export function NavBar() {
  return (
    <div className='root'>
        <AppBar position="static">
          <Toolbar>
              <Typography variant="h6" component="div" className="title">
              Brenda Armero Martínez
              </Typography>
              <div className='button-container'>
                <ThemeProvider theme={theme}> 
                  <Button variant="contained" color="secondary" size="large"> 
                    <Link to="/">Home</Link>
                  </Button>
                  <Button variant="contained" color="secondary" size="large"> 
                    <Link to="/Studies">Estudios</Link>
                  </Button>
                  <Button variant="contained" color="secondary" size="large"> 
                    <Link to="/AboutMe">Acerca de mi</Link>
                  </Button>
                  <Button variant="contained" color="secondary" size="large"> 
                    <Link to="/Contact">Contacto</Link>
                  </Button>
                </ThemeProvider>
              </div>
          </Toolbar>
        </AppBar>
    </div>
  );
}
