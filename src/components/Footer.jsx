import { Box } from '@mui/system';
import { Colors } from '../Globals';
import Stack from '@mui/material/Stack';
import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const Footer = () => {
    return (

        <div className="appfooter">
                <Container style={{display:'flex',justifyContent:'space-around', padding:'20px'}}>
                    <div style={{display:'flex', flexDirection:'column', gap:'2px'}}>
                    <Link to="/terms">
                        <Typography sx={{display:'flex'}}><ChevronRightIcon/>Termeni si conditii</Typography>
                    </Link>
                    <Link to="/gdpr">
                        <Typography sx={{display:'flex'}}><ChevronRightIcon/>Prelucrarea datelor cu caracter personal</Typography>
                    </Link>
                    <Link to="/cookies">
                        <Typography sx={{display:'flex'}}><ChevronRightIcon/>Politica de utilizare a cookie-urilor</Typography>
                    </Link>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', gap:'2px'}}>
                    <Link to="/contact">
                        <Typography sx={{display:'flex'}}><ChevronRightIcon/>Contact</Typography >
                    </Link>
                    <Link to="/about">  
                        <Typography sx={{display:'flex'}}><ChevronRightIcon/>Despre</Typography>
                    </Link>
                    </div>
                    </Container>
        </div>);
}

export default Footer;