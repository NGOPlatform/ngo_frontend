import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LocationOn from '@mui/icons-material/LocationOn';
import Favorite from '@mui/icons-material/Favorite';
import { Button } from '@mui/material';
import { Link} from 'react-router-dom'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export const ONGCard = ({ ONG , onSaveONG, favorites }) => {
    return (
        <Card elevation={0} >
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h4 style={{ marginBottom: 0, marginTop: 0 }}>{ONG.name}</h4>
                    <IconButton sx={{ padding: 'auto 0' }} onClick={() => { onSaveONG(ONG) }}>
                        <Favorite sx={{ color: (favorites && favorites.length>0 && favorites.map(el=> el.id).includes(ONG.id)) ? '#fc5185' : '' }} />
                    </IconButton>
                </Box >
                <Box color={'grey.500'} display={'flex'} alignItems={'center'} mb={1}>
                    <LocationOn sx={{ fontSize: '18px', marginRight: '4px' }} />
                    <span sx={{
                        color: 'rgb(158, 158, 158)',
                        fontSize: '0.875rem',
                        fontWeight: 400,
                        lineHeight: 1.43,
                        letterSpacing: '0.01071em'
                    }}>{ONG.address}</span>
                </Box>
                <Typography color={'textSecondary'} variant={'body2'}
                    sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: '2',
                        whiteSpace: 'pre-wrap',
                    }}>
                    {capitalizeFirstLetter(ONG.description)}
                </Typography>
                <Link to={`/ong/${ONG.id}`} >
                <Button size="small" variant="outlined"
                    sx={{ color: '#6c63ff', borderColor: '#6c63ff', marginTop: 1.2 }}
                >Vezi mai mult</Button>
                </Link>
            </CardContent>
        </Card>
    )
};

export default ONGCard