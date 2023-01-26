import { useEffect,useState } from "react";
import { Box, Container } from '@mui/system';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import { Send } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { UseGetNouOngs } from "../customHooks/UseGetNouOngs";
import Loading from "../components/Shared/Loading";
const News = () => {
    const [data, error, loading] = UseGetNouOngs();
    const [nouONGs, setNouONGs] = useState([]);
    useEffect(()=>{
        if(data!=null){
            setNouONGs(data);
        }
    },[data]);

    return (
        <Container maxWidth="lg" sx={{
            marginTop: '40px', marginBottom: '40px', paddingTop:'40px', 
            backgroundColor: '#ffffff87', minHeight: 'calc(100vh - 48px - 120px)', borderRadius: '25px'
        }}>
        {loading &&  <Loading msg="Se încarcă" />}
        {error && <h3> Error</h3>}
        {
            !loading && !error &&    
            <>
            <Typography gutterBottom variant='h4' align='center' sx={{ color: '#6c63ff' }}>Aici poti vedea noi aparute pe platforma noastra </Typography>
            <Box sx={{
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(345px, 1fr))',
                gap: '20px', alignContent: 'flex-start', width: 'fit-content', width: '100%'
            }}>

                {nouONGs && nouONGs.length >0? nouONGs.map(el =>
                    <ONGNouCard
                        key={el.name + el.description + el.id + "unique"}
                        id={el.id}
                        title={el.name}
                        desc={el.description}
                        urlViewMore={`/ong/${el.id}`} />
                )
                    :
                    ""}
            </Box>
            </> 
    }
    </Container>

    );
}

const ONGNouCard = ({ id, title, desc, urlViewMore }) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  

    return (<Card sx={{ maxWidth: '345px', height:'225px', display: 'flex', flexDirection: 'column',
     justifyContent: 'space-between' }} variant="outlined" >
        <CardContent >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h5 style={{ marginBottom: 0, marginTop: 0 }}>{title}</h5>
            </Box >
            <Typography variant="body2" color="text.secondary">
                {desc.length < 150 ? desc : desc.substr(0, 150) + "..."}
            </Typography>
        </CardContent>
        <CardActions>
        
            <Button size="small" variant="contained" disableElevation sx={{backgroundColor:'#6c63ff !important'}} 
            onClick={()=>{navigate(urlViewMore)}}>Vezi mai mult</Button>
        </CardActions>
    </Card>);
}




export default News;