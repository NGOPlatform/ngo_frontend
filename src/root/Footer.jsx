import { Box } from '@mui/system';
import { Colors } from '../Globals';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <Box sx={{ 'background': Colors.dark, 'color': Colors.white, minHeight: '100px' }}>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100%' }}
            >
                <Box>
                    <Link to="/terms">
                        <Typography>Termeni si conditii</Typography>
                    </Link>
                    <Link to="/gdpr">
                        <Typography>Prelucrarea datelor cu caracter personal</Typography>
                    </Link>
                    <Link to="/cookies">
                        <Typography>Politica de utilizare a cookie-urilor</Typography>
                    </Link>
                </Box>
                <Box>
                    <Link to="/contact">
                        <Typography>Contact</Typography>
                    </Link>
                    <Link to="/about">  
                        <Typography>Despre</Typography>
                    </Link>
                </Box>
            </Stack>

        </Box>);
}

export default Footer;