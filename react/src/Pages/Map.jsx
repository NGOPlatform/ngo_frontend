import { Colors } from '../Globals';
import Grid from '@mui/material/Grid';
import { useONGs } from '../customHooks/ONGs';
import { useState } from 'react';
import Loading from '../components/Shared/Loading';
import MapComponent from '../components/Map/MapComponent'
import { Container, grid } from '@mui/system';
import SearchArea from '../components/Search/SearchArea';
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
        loading,
      } = useONGs(searchCriteria);


    // const handleSaveONG = (element) => {
    //     let newONGs = [...ONGs];
    //     let index = newONGs.findIndex((newONG) => newONG.name === element.name && newONG.address === element.address);
    //     newONGs[index].isSaved = !newONGs[index].isSaved;
    //     setONGs(newONGs);
    //     // console.log('saving is commented out right now')
    // }
    return (
        <Container maxWidth="xl" sx={{ marginTop: '40px',marginBottom:'40px', 
        display:'grid', gridTemplateColumns:'3fr 5fr', minHeight:'calc(100vh - 48px - 120px)'}}>
            {(!loading && ONGs && ONGs.length > 0) ?
             <MapComponent ONGs={ONGs}  searchCriteria={searchCriteria} setSearchCriteria={setSearchCriteria}/> : <Loading msg="Se încarcă harta" />}
        </Container>
    );
}

export default MapPage;