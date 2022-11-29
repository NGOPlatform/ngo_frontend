import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ONGCard from './ONGCard';
import { UseONGs } from '../datastore/ONGs';
export default function ONGList() {
    const ONGs = UseONGs();

    return (
        <List sx={{ width: '100%', maxHeight:'100%', backgroundColor: 'background.paper', overflow:'auto',mb:2}}>
            {ONGs.map((el, i) => {
                return (
                    <React.Fragment key={i + "_WrapperONGCard"}>
                        <ONGCard  key={i + "_ONGCard"} title={el.name} description={el.description} address={el.address}/>
                        { i !== ONGs.length - 1 && <Divider key={i+ "_ONGCardDivider"} variant="inset" component="li" />}
                    </React.Fragment>)

            })}
        </List>
    );
}