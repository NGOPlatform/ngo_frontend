import { Colors } from '../Globals';
import Grid from '@mui/material/Grid';
import SearchArea from '../Search/SearchArea';
import Map from '../Map/Map';
import { useONGs } from '../datastore/ONGs';
import { useState } from 'react';

const Home = () => {

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
    
    const setNumberOfONGs = (value) => {
        setSearchCriteria({ ...searchCriteria, numberOfONGs: value });
    }
    const setcity = (value) => {
        setSearchCriteria({ ...searchCriteria, city: value });
    }
    const setcounty = (value) => {
        setSearchCriteria({ ...searchCriteria, county: value });
    }
    const setdescription = (value) => {
        setSearchCriteria({ ...searchCriteria, description: value });
    }
    const setStart = (value) => {
        setSearchCriteria({ ...searchCriteria, start: value });
    }



    const handleSaveONG = (element) => {
        // let newONGs = [...ONGs];
        // let index = newONGs.findIndex((newONG) => newONG.name === element.name && newONG.address === element.address);
        // newONGs[index].isSaved = !newONGs[index].isSaved;
        // setONGs(newONGs);
        console.log('saving is commented out right now')
    }



    return (


        <Grid container sx={{ 'backgroundColor': Colors['gray-100'] }}>

            {loading && <p>{loading}</p>}
            {ONGs && 
            (<><Grid item xs={4} height='100%'>
                <SearchArea
                    onSaveONG={handleSaveONG}
                    ONGs={ONGs}
                    searchCriteria={searchCriteria}
                    onsetNumberOfONGs={setNumberOfONGs}
                    onsetcity={setcity}
                    onsetcounty={setcounty}
                    onsetdescription={setdescription}
                    onsetStart={setStart}
                    collectionCount={9}
                />
            </Grid>
            <Grid item xs={8}>
                <Map markerAddresses={ONGs.map(el => el.address)} city={searchCriteria.city} county={searchCriteria.county} />
            </Grid></>)
            }
        </Grid>
    );
}

export default Home;