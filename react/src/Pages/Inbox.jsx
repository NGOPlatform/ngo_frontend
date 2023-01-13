import { Box } from '@mui/system';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {Container} from '@mui/system';
import { UseInboxData } from '../customHooks/InboxData.jsx';

const Inbox = () => {
    const {data: InboxData} = UseInboxData();
    return (
      <Container maxWidth="lg" sx={{display:'grid', gridTemplateColumns:'1fr 2fr', marginTop: '40px', marginBottom:'40px', backgroundColor: '#ffffff59', height:'calc(100vh - 48px - 120px)'}}>
        <Box sx={{height:'100%'}}>
            <MesagesList InboxData={InboxData}/>
        </Box>
        <Box>
            sda
        </Box>
        </Container>
    );
}


const MesagesList = ({InboxData})=>{
    return (<List sx={{position:'inherit', width: '100%',height:'100%',padding:'0', height:'100%',
    overflow:'auto', bgcolor: 'background.paper' }}>
       {InboxData.map((el, i) =>
           <><ListItem key={el.ongName + i} alignItems="flex-start">
               <ListItemAvatar>
                   <Avatar alt={el.ongName} src="/static/images/avatar/1.jpg" />
               </ListItemAvatar>
               <ListItemText
                   primary={el.title}
                   secondary={
                       <React.Fragment>
                           <Typography
                               sx={{ display: 'inline' }}
                               component="span"
                               variant="body2"
                               color="text.secondary"
                           >
       {el.shortDesc}
                           </Typography>
                          
                       </React.Fragment>
                   }
               />
           </ListItem>
       <Divider variant="inset" component="li" />
           </>
       )}


   </List>)
}

export default Inbox;