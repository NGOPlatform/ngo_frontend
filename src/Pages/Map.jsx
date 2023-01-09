import { Colors } from '../Globals';
import Grid from '@mui/material/Grid';
import { useONGs } from '../customHooks/ONGs';
import { useState } from 'react';
import Loading from '../components/Shared/Loading';
import MapComponent from '../components/Map/MapComponent'
const MapPage = () => {
    const [searchCriteria, setSearchCriteria] = useState({
        numberOfONGs: 3,
        city: '',
        county: '',
        description: '',
        start: 0
    });
    const {
        data: ONGs,
        setData: setONGs,
        loading,
      } = useONGs(searchCriteria);


    const handleSaveONG = (element) => {
        let newONGs = [...ONGs];
        let index = newONGs.findIndex((newONG) => newONG.name === element.name && newONG.address === element.address);
        newONGs[index].isSaved = !newONGs[index].isSaved;
        setONGs(newONGs);
        // console.log('saving is commented out right now')
    }

    return (
        <Grid container sx={{ 'backgroundColor': Colors['gray-100'] }}>
            {(!loading && ONGs && ONGs.length > 0) ?
             <MapComponent/> : <Loading msg="Se încarcă harta" />}
        </Grid>
    );
}

export default MapPage;