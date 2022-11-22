import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { useState } from 'react';
const registerWrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

}
const registerBoxStyle = {
    borderRadius: '12px',
    background: '#e0e0e0',
    boxShadow: '7px 7px 19px #d0d0d0, -7px -7px 19px #f0f0f0',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    flexDirection: 'column',
    alignItems: 'center',
    p: '20px',
    boxSizing: 'border-box',
    gap: '0 20px'
}





const Register = () => {
    const [registerData, setRegisterData] = useState({
        'firstName': '',
        'lastName': '',
        'email': '',
        'confirmEmail': '',
        'password': '',
        'confirmPassword': ''
    });

    const handleChangeRegisterData = (e, key) => {
        console.log(e.target.value, key)
    }

    return (<Box sx={registerWrapperStyle}>
        <Box sx={registerBoxStyle}>
            <Typography sx={{ gridColumn: '1 / 3' }}>Inregistrare</Typography>
            {Object.keys(registerData).map(l =>
                <TextField
                    key={l}
                    sx={{ width: '350px' }}
                    variant="standard" margin="normal" label={l}
                    onChange={(e) => handleChangeRegisterData(e, l)} />
            )}
            <Button variant='outlined' sx={{ marginTop: '50px', gridColumn: '1 / 3' }}> Inregistrare</Button>
        </Box>
    </Box>);
}

export default Register;