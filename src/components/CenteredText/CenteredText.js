import { Grid, Typography } from "@mui/material";
import './CenteredText.css'

export function CenteredText() {
  return (
    <Grid className='centeredText' container direction="column" justifyContent="space-around" alignItems="center" spacing={2}>
        <Grid item xs={3}>
            <Typography variant="body1" align="center" gutterBottom="true">
                Bienvenido a mi mundo, el emocionante universo del desarrollo web.        
            </Typography>
        </Grid>
        <Grid item xs={3}>
            <Typography variant="body1" align="center" gutterBottom="true">
                El dessarrollo web es un lienzo en blanco esperando a ser diseñado con nuestra creatividad. Es el lugar donde los diseñadores 
                y desarrolladores pueden unir fuerzas para crear experiencias visuales y funcionales impresionantes.          
            </Typography>
        </Grid>
        <Grid item xs={3}>
            <Typography variant="body1" align="center" gutterBottom="true" fontWeight="bold">
                Soy Brenda y soy una apasionada Front-End Developer con un profundo amor por la creación y la innovación en la web.          
            </Typography>
        </Grid>
    </Grid>
  );
}
