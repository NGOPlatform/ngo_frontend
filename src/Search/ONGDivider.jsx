import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const leftRightIconStyle = {
    backgroundColor: '#f1ecff',
    color: '#7b48ff',
    width: 25,
    height: 25,
    borderRadius: "5px"
}


const ONGShow = ({ OngCount }) => {

    return (<Box py={2} display='flex' justifyContent='space-between'>
        <Box display='flex' alignItems='center'>

            <Typography> ONG-uri</Typography>&nbsp;
            <Typography sx={{ fontSize: 14,m:0 }} color="text.secondary" gutterBottom>
                {OngCount} rezultate
            </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 1 }}>
            <ArrowLeftIcon sx={leftRightIconStyle} />
            <ArrowRightIcon sx={leftRightIconStyle} />
        </Box>
    </Box>);
}

export default ONGShow;