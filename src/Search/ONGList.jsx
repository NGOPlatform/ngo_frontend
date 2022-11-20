import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ONGCard from './ONGCard';
import { Box } from '@mui/material';
const ONGs = [
    {
        "name": "das",
        "location": "sda"
    },
    {
        "name": "das",
        "location": "sda"
    },
    {
        "name": "das",
        "location": "sda"
    },
    {
        "name": "das",
        "location": "sda"
    },
    {
        "name": "das",
        "location": "sda"
    },
    {
        "name": "das",
        "location": "sda"
    },
    {
        "name": "das",
        "location": "sda"
    },
    {
        "name": "das",
        "location": "sda"
    },
    // {
    //     "name": "das",
    //     "location": "sda"
    // }
]
export default function ONGList() {
    return (
        <List sx={{ width: '100%', maxHeight:'100%', backgroundColor: 'background.paper', overflow:'auto',mb:2}}>
            {ONGs.map((el, i) => {
                return (
                    <React.Fragment key={i + "_WrapperONGCard"}>
                        <ONGCard  key={i + "_ONGCard"} title={el.name} description={el.location}/>
                        { i != ONGs.length - 1 && <Divider key={i+ "_ONGCardDivider"} variant="inset" component="li" />}
                    </React.Fragment>)

            })}
        </List>
    );
}