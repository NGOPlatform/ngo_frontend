import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
const loginWrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

}
const loginBoxStyle = {
    borderRadius: '12px',
    background: '#e0e0e0',
    boxShadow: '7px 7px 19px #d0d0d0, -7px -7px 19px #f0f0f0',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    p:'20px',
    boxSizing:'border-box',
}

const Login = () => {
    return (<Box sx={loginWrapperStyle}>
        <Box sx={loginBoxStyle}>
            <Typography>Autentificare</Typography>
            <TextField sx={{width:'350px'}} variant="standard" margin="normal" label="email" />
            <TextField sx={{width:'350px'}} variant="standard" margin="normal" label="parola" />
            <Button variant='outlined' sx={{marginTop: '50px'}}> Inregistrare</Button>
        </Box>
    </Box>);
}

export default Login;