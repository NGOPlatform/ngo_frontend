import { Colors } from '../Globals';
import Grid from '@mui/material/Grid';
import { useONGs } from '../customHooks/ONGs';
import { useState } from 'react';
import Loading from '../components/Shared/Loading';
import MapComponent from '../components/Map/MapComponent'
import { Container, grid } from '@mui/system';
import SearchArea from '../components/Search/SearchArea';
const MapPage = () => {

    return (
        <Container maxWidth="xl" sx={{ marginTop: '40px',marginBottom:'40px', 
        display:'grid', gridTemplateColumns:'3fr 5fr', minHeight:'calc(100vh - 48px - 120px)'}}>
             <MapComponent/> 
        </Container>
    );
}

export default MapPage;