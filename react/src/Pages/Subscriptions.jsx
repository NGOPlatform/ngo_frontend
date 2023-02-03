import { Box } from '@mui/system';
import { Container } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { getCurrentUser } from '../customHooks/UserRepository';
import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardActions } from '@mui/material';
import {APIUrls} from "../Globals"
import axios from 'axios';
const Subscription = () => {
    const user = getCurrentUser();


    return (<Container maxWidth="lg" sx={{
        marginTop: '40px', marginBottom: '40px', paddingTop: '40px', paddingBottom: '40px',
        backgroundColor: '#ffffff87', borderRadius: '25px'
    }}>
       <Subscribe user={user}/>
       <MySubscriptions user={user}/>
       <MyNotifications user={user}/>
    </Container>);
}


const Subscribe = ({user})=>{
    const [subsInput, setSubsInput] = useState('');
    const handleChangeInputData = (e) => {
        setSubsInput(e.target.value)
    }
    return ( <><Typography gutterBottom variant='h4' align='center' sx={{ color: '#6c63ff' }}>Abonarile tale, {user.username} </Typography>
    <Box sx={{width:'50%', display:'flex', alignItems:"center",gap:'10px'}}>
        <TextField
            sx={{width:'100%'}}
            margin="normal" label="test"
            onChange={(e) => handleChangeInputData(e)}
            type="text"
            value={subsInput} />
        <Button   variant="outlined"
                sx={{ color: '#6c63ff', borderColor: '#6c63ff', marginTop: 1.2, width:'200px' }}
                > Aboneaza-te</Button>
    </Box>
    <Box sx={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(345px, 1fr))',
        gap: '20px', alignContent: 'flex-start', width: 'fit-content', width: '100%'
    }}>

    </Box>
    </>
)
}

const MySubscriptions = ({user}) =>{
    return (
        <>
        <Typography gutterBottom variant='h4' align='left' sx={{ color: '#6c63ff' }}>Uite la ce te-ai abonat: </Typography>
        <ul>
            {user.subscriptions.length > 0 ? user.subscriptions.slice(0,-1).split(";").map( el => <li>{el}</li>) : "nu exista abonari"}
        </ul>
        </>
    )
}

const MyNotifications = ({user})=>{
    const [data,setData] = useState([])
    useEffect(()=>{
        if(user.notifications.length > 0 ){
           let ONGsId = user.notifications.split(";");
            let promises = [];
            promises = ONGsId.map( currentId =>{
                const url = APIUrls.getONG
                return axios.get(url, { params: { id:currentId} });

            })
            Promise.all(promises).then((values) => {
                // console.log(values);
                setData(values.map(el => el.data))
              });


        }
    },[user])

    return (
        <>
        <Typography gutterBottom variant='h4' align='left' sx={{ color: '#6c63ff' }}>Uite la ce te-ai abonat: </Typography>
        <Box sx={{display:'grid',gridTemplateColumns: 'repeat(auto-fit, minmax(345px, 1fr))',
            gap: '20px',alignContent: 'flex-start',width: 'fit-content', width:'100%'}}>

        { user.notifications.length > 0 ? data.map( el => (
                <NotificationCard title={el.name} desc={el.description} urlViewMore={`/ong/${el.id}`} id={el.id}/>
        )
            ) : "nu exista notificari"}
        </Box>

        </>
    )
}

const NotificationCard = ({ id, title, desc, urlViewMore }) => {
    const navigate = useNavigate();
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

export default Subscription;