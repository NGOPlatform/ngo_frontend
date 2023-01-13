import { Box, Container } from '@mui/system';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import UseSavedOngs from '../customHooks/UseSavedOngs';
import Favorite from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import { Send } from '@mui/icons-material';
const Saved = () => {
    const {
        data: savedOngs,
        loading,
    } = UseSavedOngs();
    // console.log(savedOngs);
    return (
        <>
        <Container maxWidth="lg" sx={{
            marginTop: '40px', marginBottom: '40px', paddingTop: '40px', paddingBottom: '40px',
            backgroundColor: '#ffffff87',  borderRadius: '25px'
        }}>
        <Typography gutterBottom variant='h3' align='center' sx={{color:'#6c63ff'}}>Salvariile tale, {"USER"} </Typography>
        <Box sx={{display:'grid',gridTemplateColumns: 'repeat(auto-fit, minmax(345px, 1fr))',
            gap: '20px',alignContent: 'flex-start',width: 'fit-content', width:'100%'}}>
            
            {savedOngs.map(el =>
                <SavedOngCard
                title={el.name}
                desc={el.description} />
                )}
        </Box>

        </Container>
        </>
    );
}

const SavedOngCard = ({ title, desc, urlViewMore }) => {
    return (<Card sx={{ maxWidth: '345px', height:'225px', display: 'flex', flexDirection: 'column',
     justifyContent: 'space-between' }} variant="outlined" >
        {/* <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
        /> */}
        <CardContent >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h5 style={{ marginBottom: 0, marginTop: 0 }}>{title}</h5>
                <IconButton sx={{ padding: 'auto 0' }} >
                    <Favorite sx={{ color: '#fc5185' }} />
                </IconButton>
            </Box >
            <Typography variant="body2" color="text.secondary">
                {desc.length < 150 ? desc : desc.substr(0, 150) + "..."}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" variant="contained" disableElevation sx={{backgroundColor:'#6c63ff'}}>Vezi mai mult</Button>
            <Button size="small" variant="outlined" sx={{color:"#6c63ff"}} startIcon={<Send  />}>Distribuie</Button>
        </CardActions>
    </Card>);
}


export default Saved;