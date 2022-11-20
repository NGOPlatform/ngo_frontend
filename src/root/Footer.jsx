import { Box } from '@mui/system';
import { Colors } from '../Globals';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

const Footer = () => {
    return (

        <Box sx={{ 'background': Colors.dark, 'color': Colors.white, minHeight:'100px' }}>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                sx={{ display: 'flex', justifyContent: 'space-around', alignItems:'center',height:'100%' } }
            >
                <Typography>
                    <Typography>Termeni si conditii</Typography>
                    <Typography>Prelucrarea datelor cu caracter personal</Typography>
                    <Typography>Politica de utilizare a cookie-urilor</Typography>
                </Typography>
                <Typography>
                <Typography>Contact</Typography>
                <Typography>Despre</Typography>
                </Typography>
            </Stack>

        </Box>);
}

export default Footer;