import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {Colors} from '../Globals'

const ButtonStyle={
    'color':Colors.white,
    'background':Colors.dark,
    'borderColor':Colors.white,
    '&:hover': {
        background: Colors['gray-700'],
        'borderColor':Colors.white,
    }
}

const AuthenticationGroup = () => {
    return (
        <Box sx={{ display: 'flex', gap: '10px' }}>
            <Button 
            variant='outlined'
            sx={ButtonStyle}>Autentificare</Button>
            <Button 
            variant='outlined'
            sx={ButtonStyle}>Inregistrare</Button>
        </Box>
    );
}

export default AuthenticationGroup;