import React from 'react';
import Box from '@mui/material/Box';
import SearchInputs from './SearchInputs';
import ONGDivider from './ONGDivider';
import ONGList from './ONGList';
function SearchArea(props) {
    return (
        <Box px={4} sx={{display:'flex', flexDirection:'column', height:'100%'}}>
            <SearchInputs />
            <ONGDivider OngCount={242}/>
            <ONGList/>  
        </Box>
    );
}

export default SearchArea;