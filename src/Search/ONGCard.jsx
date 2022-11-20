import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import { Colors } from '../Globals';
const ONGCard = ({title, description}) => {
    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar sx={{ backgroundColor: Colors.green }} variant="rounded">
                    <HelpCenterIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={title}
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                        {description}
                        </Typography>
                          
                    </React.Fragment>
                }
            />
        </ListItem>);
}

export default ONGCard;