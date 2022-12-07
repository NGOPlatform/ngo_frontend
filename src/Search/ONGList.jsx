import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ONGCard from './ONGCard';
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { Colors } from '../Globals';
import { useState } from 'react';
import { useEffect } from 'react';
const ButtonStyle={
    'color':Colors.white,
    'background':Colors.dark,
    'borderColor':Colors.white,
    '&:hover': {
        background: Colors['gray-700'],
        'borderColor':Colors.white,
    }
}
export default function ONGList({ONGs, onSaveONG}) {
    const [isSusbcribed,setIsSubscribed] = useState(false);
    useEffect(()=>{
        setIsSubscribed(false);
    },[ONGs]);
    const handleSubscribe = () =>{
        setIsSubscribed(true);
    }
    return (
        <List sx={{ width: '100%', maxHeight:'100%', height:ONGs.length !==0 ? 'auto' : '100%', backgroundColor: 'background.paper', overflow:'auto',mb:2}}>

            
            {
            
            ONGs.length !==0 ?
            ONGs.map((el, i) => {
                return (
                    <React.Fragment key={i + "_WrapperONGCard"}>
                        <ONGCard key={i + "_ONGCard"} ONG={el} onSaveONG={onSaveONG}/>
                        { i !== ONGs.length - 1 && <Divider key={i+ "_ONGCardDivider"} variant="inset" component="li" />}
                    </React.Fragment>)
            })
            :
            <Box sx={{height:'100%', display:'flex',justifyContent:'center', alignItems:'center',flexDirection:'column',gap:'20px', px:3}}>
                {
                    isSusbcribed 
                    ? 
                    <Typography sx={{textAlign:'center'}}>V-ati abonat pentru notificarea in cazul aparitiei unui ONG ce satisface conditiile de filtrare</Typography>
                    :
                <>
                <Typography sx={{textAlign:'center'}}>Din pacate nu s-au gasit rezultate pentru criteriile selectate. Va puteti abona apasand butonul de mai jos,
                    pentru a fi notificat asupra unui ONG ce satisface cerintele selectate.
                </Typography>
                <Button sx={ButtonStyle} onClick={handleSubscribe}>Abonati-va </Button>
                </>
}
            </Box>
        }
        </List>
    );
}