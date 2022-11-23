import { Box } from '@mui/system';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { loremIpsum } from 'react-lorem-ipsum';
const MesajGeneric = "A aparut un ong nou";

const InboxData = [
    {
        'ongName': 'Haine micuti',
        'title': MesajGeneric,
        'shortDesc': loremIpsum(),
        'message': ''

    },
    {
        'ongName': '',
        'title': MesajGeneric,
        'shortDesc': loremIpsum(),
        'message': ''

    },
    {
        'ongName': '',
        'title': MesajGeneric,
        'shortDesc': loremIpsum(),
        'message': ''

    },
]

const Inbox = () => {
    return (
        <Box >

            <List sx={{position:'inherit', width: '100%',height:'100%', overflow:'auto', maxWidth: 360, bgcolor: 'background.paper' }}>
                {InboxData.map((el, i) =>
                    <ListItem key={el.ongName + i} alignItems="flex-start">
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
                                        color="text.primary"
                                    >

                                    </Typography>
                                    {el.shortDesc}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                )}

                <Divider variant="inset" component="li" />

            </List>
        </Box>

    );
}

export default Inbox;