import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Autocomplete } from '@mui/material';
import UseLocationAutocomplete from "../../customHooks/UseLocationAutocomplete";
import { createFilterOptions } from '@mui/material/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { useState } from 'react';
import { useEffect } from 'react';
const SearchInputs = ({ searchCriteria, onSetSearchCriteria }) => {
    const {
        judete: judete,
        localitati: localitati,
        setCurrentJudet: setCurrentJudet

    } = UseLocationAutocomplete();

    const [inputtedData, setInputtedData] = useState({
        "county": "",
        "city": "",
        "needs": ""
    })


    return (<Box
        component="form"
        noValidate
        autoComplete="off"
    >
        <Grid container gap={2} display='grid' sx={{ gridAutoColumns: 'minmax(0, 1fr)', gridAutoFlow: 'column' }} >
            <Grid item>
                <SearchJudet
                    inputtedData={inputtedData}
                    setInputtedData={setInputtedData}
                    judete={judete} />
            </Grid>
            <Grid item >
                <SearchLocalitate
                    inputtedData={inputtedData}
                    setInputtedData={setInputtedData}
                    localitati={localitati} />
            </Grid>
        </Grid>
        <TextField
            // onChange={(e) => { onsetdescription(e.target.value) }}
            fullWidth value={searchCriteria.description} variant="outlined" size="small" margin="dense" label="Nevoi" />
    </Box>);
}



const SearchJudet = ({ judete, inputtedData, setInputtedData }) => {

    return (
        <Autocomplete
            size="small"
            disablePortal
            options={judete}
            sx={{ marginTop: '8px' }}
            inputValue={inputtedData.county}
            onInputChange={(event, newInputValue) => {
                setInputtedData({ ...inputtedData, county: newInputValue });
            }}
            renderInput={(params) => <TextField  {...params} label="Judet" />}
        />
    )
}


const SearchLocalitate = ({ localitati, inputtedData, setInputtedData }) => {
    const filterOptions = createFilterOptions({
        matchFrom: 'any'
    });

    return (<Autocomplete
        size="small"
        disablePortal
        filterOptions={filterOptions}
        options={localitati.sort((a, b) => a.label.toUpperCase().localeCompare(b.label.toUpperCase()))}
        sx={{ marginTop: '8px' }}
        inputValue={inputtedData.city}
        onInputChange={(event, newInputValue) => {
            setInputtedData({ ...inputtedData, city: newInputValue });
        }}
        renderInput={(params) => <TextField  {...params} label="localitate" />}
        renderOption={(props, option, { inputValue }) => {
            const matches = match(option.label, inputValue, { insideWords: true });
            const parts = parse(option.label, matches);
            return (
                <li {...props}>
                    <div>
                        {parts.map((part, index) => (
                            <span
                                key={index}
                                style={{
                                    fontWeight: part.highlight ? 550 : 400,
                                }}
                            >
                                {part.text}
                            </span>
                        ))}
                    </div>
                </li>
            );
        }}
    />)
}



// const SearchNevoi = ({}){

// }
export default SearchInputs;