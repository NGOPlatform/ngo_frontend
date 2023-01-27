import MapComponent from '../components/Map/MapComponent'
import { Container } from '@mui/system';
const MapPage = () => {

    return (
        <Container maxWidth="xl" sx={{ marginTop: '40px',marginBottom:'40px'}}>
             <MapComponent/> 
        </Container>
    );
}

export default MapPage;