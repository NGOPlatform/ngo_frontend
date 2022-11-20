import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { grid } from '@mui/system';
const SearchInputs = () => {
    return (<Box
        component="form"
        noValidate
        autoComplete="off"
    >
        <Grid container gap={2} display='grid' sx={{gridTemplateColumns:'1fr 1fr'}} >
            <Grid item>
                <TextField fullWidth variant="standard" size="small" margin="dense" label="Judet" />
            </Grid>
            <Grid item >
                <TextField fullWidth variant="standard" size="small" margin="dense" label="Localitate" />
            </Grid> 
        </Grid>
        <TextField fullWidth variant="standard" size="small" margin="dense" label="Nevoi" />
    </Box>);
}

export default SearchInputs;