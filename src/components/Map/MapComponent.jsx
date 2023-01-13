import SearchArea from '../Search/SearchArea';
import MapWrapper from '../Map/MapWrapper';
import { Grid, Box } from '@mui/material';
const MapComponent = ({handleSaveONG,ONGs, searchCriteria, setSearchCriteria}) => {
    return (
        <>
            <Box height='100%' sx={{ backgroundColor: 'background.paper', borderRadius:'20px 0 0 20px' }}>
                <SearchArea
                    onSaveONG={handleSaveONG}
                    ONGs={ONGs}
                    searchCriteria={searchCriteria}
                    onSetSearchCriteria={setSearchCriteria}
                    collectionCount={9}
                />
            </Box>
            <Box item xs={8}>
                <MapWrapper markerAddresses={ONGs.map(el => el.address)} city={searchCriteria.city} county={searchCriteria.county} />
            </Box>

        </>);
}

export default MapComponent;

