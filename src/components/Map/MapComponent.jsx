import SearchArea from '../Search/SearchArea';
import MapWrapper from '../Map/MapWrapper';
import { Grid } from '@mui/material';
const MapComponent = ({handleSaveONG,ONGs, searchCriteria, setSearchCriteria}) => {
    return (
        <>
            <Grid item xs={4} height='100%'>
                <SearchArea
                    onSaveONG={handleSaveONG}
                    ONGs={ONGs}
                    searchCriteria={searchCriteria}
                    onSetSearchCriteria={setSearchCriteria}
                    collectionCount={9}
                />
            </Grid>
            <Grid item xs={8}>
                <MapWrapper markerAddresses={ONGs.map(el => el.address)} city={searchCriteria.city} county={searchCriteria.county} />
            </Grid>
        </>);
}

export default MapComponent;

