import { Grid, Typography } from "@mui/material";
import imageBrenda from '../../assets/imageBrenda.png'
import "./TextWithImage.css";

export function TextWithImage() {
  return (
    <Grid className='textWithImage' container direction="row" justifyContent="space-around" alignItems="center" spacing={2}>
        <Grid item xs className="centeredImage">
            <img src={imageBrenda} alt="imageBrenda" />  
        </Grid>
        
        <Grid item xs>
            <Grid  container direction="column" justifyContent="space-around" alignItems="center" spacing={2}>
                <Grid item xs>
                <Typography variant="h6">FRONT-END DEVELOPER</Typography>
                <Typography variant="h6">FRONT-END DEVELOPER</Typography>
                <Typography variant="h6">FRONT-END DEVELOPER</Typography>
                <Typography variant="h6">FRONT-END DEVELOPER</Typography>
                <Typography variant="h6">FRONT-END DEVELOPER</Typography>
                <Typography variant="h6">FRONT-END DEVELOPER</Typography>
                <Typography variant="h6">FRONT-END DEVELOPER</Typography>
                <Typography variant="h6">FRONT-END DEVELOPER</Typography>
                <Typography variant="h6">FRONT-END DEVELOPER</Typography>
                </Grid>
            </Grid>
        </Grid>
        
    </Grid>
  );
}
