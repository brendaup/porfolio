import { Grid, Typography } from "@mui/material";

export function CenteredText() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
        <Typography variant="body1" align="center" gutterBottom="true">
            Bienvenido a mi mundo, el emocionante universo del desarrollo web.        
        </Typography>

        <Typography variant="body1" align="center" gutterBottom="true">
            El dessarrollo web es un lienzo en blanco esperando a ser diseñado con nuestra creatividad. Es el lugar donde los diseñadores 
            y desarrolladores pueden unir fuerzas para crear experiencias visuales y funcionales impresionantes.          
        </Typography>

        <Typography variant="body1" align="center" gutterBottom="true" fontWeight="bold">
            Soy Brenda y soy una apasionada Front-End Developer con un profundo amor por la creación y la innovación en la web.          
        </Typography>

    </Grid>
  );
}
