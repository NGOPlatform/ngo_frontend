import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ONGCard from './ONGCard';
export default function ONGList({ONGs, onSaveONG}) {

    return (
        <List sx={{ width: '100%', maxHeight:'100%', height:'ihnerit', backgroundColor: 'background.paper', overflow:'auto',mb:2}}>
            {ONGs.map((el, i) => {
                return (
                    <React.Fragment key={i + "_WrapperONGCard"}>
                        <ONGCard key={i + "_ONGCard"} ONG={el} onSaveONG={onSaveONG}/>
                        { i !== ONGs.length - 1 && <Divider key={i+ "_ONGCardDivider"} variant="inset" component="li" />}
                    </React.Fragment>)
            })}
        </List>
    );
}