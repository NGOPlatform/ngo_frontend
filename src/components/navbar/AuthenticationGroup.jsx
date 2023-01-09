import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {Colors} from '../Globals';
import { Link } from 'react-router-dom';
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
            <Link to="/login">
                <Button 
                variant='outlined'
                sx={ButtonStyle}>Autentificare</Button>
            </Link>
            <Link to="/register">
            <Button 
            variant='outlined'
            sx={ButtonStyle}>Inregistrare</Button>
            </Link>

        </Box>
    );
}

export default AuthenticationGroup;