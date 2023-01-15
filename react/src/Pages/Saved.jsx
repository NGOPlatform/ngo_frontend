import { Box, Container } from '@mui/system';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import UseSavedOngs from '../customHooks/UseSavedOngs';
import Favorite from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import { Send } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Modal} from "@mui/material";
import { FacebookShareButton,FacebookIcon,TwitterShareButton,TwitterIcon,
  TelegramShareButton,TelegramIcon,WhatsappShareButton,WhatsappIcon,LinkedinShareButton,
  LinkedinIcon,VKShareButton,VKIcon,RedditShareButton,RedditIcon,EmailShareButton,EmailIcon

} from "react-share"
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
                key={el.name + el.description+ el.id + "unique"}
                title={el.name}
                desc={el.description} 
                urlViewMore = {`/ong/${el.id}`}/>
                )}
        </Box>
      
        </Container>
        </>
    );
}

const SavedOngCard = ({ title, desc, urlViewMore }) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  

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
        
            <Button size="small" variant="contained" disableElevation sx={{backgroundColor:'#6c63ff !important'}} 
            onClick={()=>{navigate(urlViewMore)}}>Vezi mai mult</Button>
            <Button size="small" variant="outlined" sx={{color:"#6c63ff",borderColor:"#6c63ff"}}
            onClick={()=>{handleOpen();}}
            startIcon={<Send  />}>Distribuie</Button>
        </CardActions>
        <ShareModal open={open} ongName={title} handleClose={handleClose} shareUrl={"http://192.168.0.108:3000" + urlViewMore}/>
    </Card>);
}


const ShareModal = ({shareUrl, ongName, open,handleClose})=>{
    
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    boxShadow: 24,
    p: 2,
    borderRadius:'20px',
    display:'flex',
    flexDirection:'column',
    gap:'10px'
  };
  
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Distribuie acest ONG 
          </Typography>
          <Button 
          variant='contained' 
          size="small"
          style={{backgroundColor:'#6c63ff', minWidth:'auto', borderRadius:'5px'}}
          onClick={()=>{handleClose()}}
          >X</Button>
        </div>
          <Typography color={'textSecondary'} variant={'body2'}>Nume: {ongName}</Typography>
          <Typography id="modal-modal-description">
            Poti sa copiezi adresa de mai jos si sa o inserezi pe reteaua ta favorita
            de socializare
          </Typography>
          <div style={{border:'1px solid #6c63ff',color:'#6c63ff',padding:'10px', borderRadius:'25px'
          , display:'flex', justifyContent:'center'
        }}>
          <Typography sx={{fontWeight:'500'}}>{shareUrl}</Typography>
          </div>
          <Typography>S-au folosind una din scurtaturile afisate mai jos</Typography>
          <div>
          <ShareIcons shareUrl={shareUrl}/>
        </div>
        </Box>
      </Modal>
    </div>
  );
    
}

const ShareIcons = ({shareUrl}) =>{
  
  return  (
  <div style={{display:'flex',justifyContent:'center', gap:'3px'}}>
  <FacebookShareButton url={shareUrl}>  
  <FacebookIcon size={32} round />
</FacebookShareButton>
<TwitterShareButton url={shareUrl} >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <TelegramShareButton
            url={shareUrl}
          >
            <TelegramIcon size={32} round />
          </TelegramShareButton>
          <WhatsappShareButton
            url={shareUrl}
            separator=":: "
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          <LinkedinShareButton url={shareUrl} >
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <VKShareButton
            url={shareUrl}
          >
            <VKIcon size={32} round />
          </VKShareButton>
          <RedditShareButton
            url={shareUrl}
            windowWidth={660}
            windowHeight={460}
          >
            <RedditIcon size={32} round />
          </RedditShareButton>
          <EmailShareButton
            url={shareUrl}
            subject={'title'}
            body="body"
          >
            <EmailIcon size={32} round />
          </EmailShareButton>
  </div>);
}


export default Saved;