import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
function SearchArea(props) {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>

                <TextField fullWidth id="outlined-basic" label="Judet" variant="outlined"   size="small"  margin="dense" />
                <TextField fullWidth id="outlined-basic" label="Localitate" variant="outlined"   size="small"  margin="dense" />
                <TextField fullWidth id="outlined-basic" label="Nevoi" variant="outlined"   size="small"  margin="dense" />
            </div>
        </Box>
    );
}

export default SearchArea;