import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import { Colors } from '../Globals';
const ONGCard = ({ title, description }) => {
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
                            sx={{
                                display: 'inline',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                '-webkit-box-orient': 'vertical',
                                '-webkit-line-clamp': '4', /* start showing ellipsis when 3rd line is reached */
                                whiteSpace: 'pre-wrap'
                            }}
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