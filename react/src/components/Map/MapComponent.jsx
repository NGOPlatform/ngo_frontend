import SearchArea from '../Search/SearchArea';
import MapWrapper from '../Map/MapWrapper';
import { Box } from '@mui/material';
import {useONGs} from "../../customHooks/ONGs"
import Loading from '../Shared/Loading';
import { toggleSaveONG } from '../../customHooks/UserRepository';
import { getUserSaves } from '../../customHooks/UserRepository';
import { useEffect, useState } from 'react';
const MapComponent = () => {
    const [favorites, setFavorites]= useState([]);
    const {
        data: ONGs,
        collectionCount,
        loading,
        searchCriteria,
        setSearchCriteria
      } = useONGs();


    const handleSaveONG = (element) => {
        // let newONGs = [...ONGs];
        // let index = newONGs.findIndex((newONG) => newONG.name === element.name && newONG.address === element.address);
        // newONGs[index].isSaved = !newONGs[index].isSaved;
        // setONGs(newONGs);
        // console.log(element.id)
        setFavorites(toggleSaveONG(element.id));
        // console.log('saving is commented out right now')
    }

    useEffect(()=>{
            const favorites = getUserSaves();
            setFavorites(favorites ? favorites : []);
    },[])

    return (
        (!loading ) ?
        <>
            <Box sx={{ backgroundColor: 'background.paper', borderRadius:'20px 0 0 20px', height:'100%' }}>
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

        </>
        : <Loading msg="Se încarcă harta" />
        );
}

export default MapComponent;

