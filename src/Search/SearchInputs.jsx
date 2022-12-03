import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const SearchInputs = ({ onsetcity, onsetcounty, onsetdescription, searchCriteria }) => {




    return (<Box
        component="form"
        noValidate
        autoComplete="off"
    >
        <Grid container gap={2} display='grid' sx={{ gridTemplateColumns: '1fr 1fr' }} >
            <Grid item>
                <TextField onChange={(e) => { onsetcounty(e.target.value) }} value={ searchCriteria.county }fullWidth variant="standard" size="small" margin="dense" label="Judet" />
            </Grid>
            <Grid item >
                <TextField onChange={(e) => { onsetcity(e.target.value) }} value={ searchCriteria.city }fullWidth variant="standard" size="small" margin="dense" label="Localitate" />
            </Grid>
        </Grid>
        <TextField onChange={(e) => { onsetdescription(e.target.value) }} fullWidth value={searchCriteria.description }variant="standard" size="small" margin="dense" label="Nevoi" />
    </Box>);
}

export default SearchInputs;