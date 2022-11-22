import { Colors } from '../Globals';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import SearchArea from '../Search/SearchArea';
const Home = () => {
    return (
        <Grid container sx={{'backgroundColor': Colors['gray-100'] }}>
         
            <Grid item xs={7} height='100%'>
               <SearchArea/>
            </Grid>
            <Grid item xs={5}>
                <Typography>xs</Typography>
            </Grid>
        </Grid>
    );
}

export default Home;