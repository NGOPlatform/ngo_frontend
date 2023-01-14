import SearchArea from '../Search/SearchArea';
import MapWrapper from '../Map/MapWrapper';
import { Box } from '@mui/material';
import {useONGs} from "../../customHooks/ONGs"
import Loading from '../Shared/Loading';
const MapComponent = ({}) => {

    const {
        data: ONGs,
        collectionCount: collectionCount,
        loading,
        searchCriteria,
        setSearchCriteria
      } = useONGs();


    const handleSaveONG = (element) => {
        // let newONGs = [...ONGs];
        // let index = newONGs.findIndex((newONG) => newONG.name === element.name && newONG.address === element.address);
        // newONGs[index].isSaved = !newONGs[index].isSaved;
        // setONGs(newONGs);
        console.log('saving is commented out right now')
    }


    return (
        (!loading && ONGs && ONGs.length > 0) ?
        <>
            <Box height='100%' sx={{ backgroundColor: 'background.paper', borderRadius:'20px 0 0 20px' }}>
                <SearchArea
                    onSaveONG={handleSaveONG}
                    ONGs={ONGs}
                    searchCriteria={searchCriteria}
                    onSetSearchCriteria={setSearchCriteria}
                    collectionCount={collectionCount}
                />
            </Box>
            <Box item xs={8}>
                <MapWrapper markerAddresses={ONGs.map(el => el.address)} city={searchCriteria.city} county={searchCriteria.county} />
            </Box>

        </>
        : <Loading msg="Se încarcă harta" />
        );
}

export default MapComponent;

