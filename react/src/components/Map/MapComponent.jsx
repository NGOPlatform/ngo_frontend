import SearchArea from '../Search/SearchArea';
import MapWrapper from '../Map/MapWrapper';
import { Box } from '@mui/material';
import { useONGs } from "../../customHooks/ONGs"
import Loading from '../Shared/Loading';
import { toggleSaveONG } from '../../customHooks/UserRepository';
import { getUserSaves } from '../../customHooks/UserRepository';
import { useEffect, useState } from 'react';
const MapComponent = () => {
    const [favorites, setFavorites] = useState([]);
    const {
        data: ONGs,
        collectionCount,
        loading,
        error,
        searchCriteria,
        setSearchCriteria
    } = useONGs();


    const handleSaveONG = (element) => {

        const newFavorites = toggleSaveONG(element);
        setFavorites(newFavorites);
    }

    useEffect(() => {
        const favorites = getUserSaves();
        // console.log(favorites);
        setFavorites(favorites ? favorites : []);
    }, [])

    return (
        (false) ?
            <>
                <Box sx={{ display: 'grid', gridTemplateColumns: '3fr 5fr' }}>

                    <Box sx={{
                        backgroundColor: 'background.paper', borderRadius: '20px 0 0 20px', maxHeight: 'calc(100vh - 48px - 120px)',
                        overflow: 'auto'
                    }}>
                        <SearchArea
                            favorites={favorites}
                            onSaveONG={handleSaveONG}
                            ONGs={ONGs}
                            searchCriteria={searchCriteria}
                            onSetSearchCriteria={setSearchCriteria}
                            collectionCount={collectionCount}
                        />
                    </Box>
                    <Box xs={8}>
                        <MapWrapper
                            markerAddresses={ONGs.slice(searchCriteria.start, searchCriteria.start + searchCriteria.numberOfONGs).map(el => el.address)}
                            city={searchCriteria.city}
                            county={searchCriteria.county} />
                    </Box>
                </Box>

            </>
            : <Loading msg="Se încarcă Harta" />
    );
}

export default MapComponent;

