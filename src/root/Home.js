import { Colors } from '../Globals';
import Grid from '@mui/material/Grid';
import SearchArea from '../Search/SearchArea';
import Map from '../Map/Map';
const Home = () => {
    return (
        <Grid container sx={{'backgroundColor': Colors['gray-100'] }}>
         
            <Grid item xs={4} height='100%'>
               <SearchArea/>
            </Grid>
            <Grid item xs={8}>
                <Map/>
            </Grid>
        </Grid>
    );
}

export default Home;