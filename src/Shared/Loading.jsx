import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


const Loading = () => {
    return ( <Box sx={{width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column',gap:'20px'}}>
        Se încarcă harta
          <LinearProgress sx={{width:'30%'}} />
    </Box> );
}
 
export default Loading;