import { Box } from '@mui/system';
import { Colors } from '../Globals';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <Box sx={{ 'background': Colors.dark, 'color': Colors.white }}>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}
            >
                    <Link to="/terms">
                        <Typography>Termeni si conditii</Typography>
                    </Link>
                    <Link to="/gdpr">
                        <Typography>Prelucrarea datelor cu caracter personal</Typography>
                    </Link>
                    <Link to="/cookies">
                        <Typography>Politica de utilizare a cookie-urilor</Typography>
                    </Link>
                    <Link to="/contact">
                        <Typography>Contact</Typography>
                    </Link>
                    <Link to="/about">  
                        <Typography>Despre</Typography>
                    </Link>
            </Stack>

        </Box>);
}

export default Footer;