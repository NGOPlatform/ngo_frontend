import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
const registerWrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

}
const registerBoxStyle = {
    borderRadius: '12px',
    background: '#e0e0e0',
    boxShadow: '7px 7px 19px #d0d0d0, -7px -7px 19px #f0f0f0',
    display:'grid',
    gridTemplateColumns:'1fr 1fr',
    flexDirection:'column',
    alignItems:'center',
    p:'20px',
    boxSizing:'border-box',
    gap:'0 20px'
}

const Register = () => {    
    return (<Box sx={registerWrapperStyle}>
        <Box sx={registerBoxStyle}>
            <Typography sx={{gridColumn:'1 / 3'}}>Inregistrare</Typography>
            <TextField sx={{width:'350px'}} variant="standard" margin="normal" label="nume" />
            <TextField sx={{width:'350px'}} variant="standard" margin="normal" label="prenume" />
            <TextField sx={{width:'350px'}} variant="standard" margin="normal" label="email" />
            <TextField sx={{width:'350px'}} variant="standard" margin="normal" label="confirmare email" />
            <TextField sx={{width:'350px'}} variant="standard" margin="normal" label="parola" />
            <TextField sx={{width:'350px'}} variant="standard" margin="normal" label="confirmare parola" />
            <Button variant='outlined' sx={{marginTop: '50px',gridColumn:'1 / 3'}}> Inregistrare</Button>
        </Box>
    </Box>);
}

export default Register;