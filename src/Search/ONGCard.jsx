import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LocationOn from '@mui/icons-material/LocationOn';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import Favorite from '@mui/icons-material/Favorite';

export const ONGCard = ({ title, address, description }) => {

    return (
        <Card elevation={0} >
            <CardContent>
                <IconButton >
                    <Favorite />
                </IconButton>
                <h3 >{title}</h3>
                <Box color={'grey.500'} display={'flex'} alignItems={'center'} mb={1}>
                    <LocationOn />
                    <span>{address}</span>
                </Box>
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    mb={1}
                >
                </Box>
                <Typography color={'textSecondary'} variant={'body2'}
                    sx={{
                        display: 'inline',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        '-webkit-box-orient': 'vertical',
                        '-webkit-line-clamp': '2', /* start showing ellipsis when 3rd line is reached */
                        whiteSpace: 'pre-wrap',
                    }}>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
};

export default ONGCard