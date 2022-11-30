import { Colors } from '../Globals';
import Grid from '@mui/material/Grid';
import SearchArea from '../Search/SearchArea';
import Map from '../Map/Map';
import { UseONGs } from '../datastore/ONGs';
import { useState } from 'react';

const Home = () => {
    
       const [ONGs, setONGs] = useState(UseONGs());
       const handleSaveONG = (element) => {
        let newONGs = [...ONGs];
        let index = newONGs.findIndex( (newONG)=> newONG.name == element.name && newONG.address == element.address );
        newONGs[index].isSaved = !newONGs[index].isSaved;
        setONGs(newONGs);
      }

    return (
        <Grid container sx={{'backgroundColor': Colors['gray-100'] }}>
         
            <Grid item xs={4} height='100%'>
               <SearchArea ONGs={ONGs} onSaveONG={handleSaveONG}/>
            </Grid>
            <Grid item xs={8}>
                <Map markerAddresses={ONGs.map(el=>el.address)}/>
            </Grid>
        </Grid>
    );
}

export default Home;