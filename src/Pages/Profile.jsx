import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';
const loginWrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

}
const loginBoxStyle = {
    borderRadius: '12px',
    background: '#e0e0e0',
    boxShadow: '7px 7px 19px #d0d0d0, -7px -7px 19px #f0f0f0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    p: '20px',
    boxSizing: 'border-box',
}
const ProfileItem = ({k,v})=>{
    return (
        <p> {k}:    {v}</p>
    )
}

const Profile = ({auth}) => {
    return ( <Box sx={loginWrapperStyle}>
        <Box sx={loginBoxStyle}>
            <Typography>Contul meu</Typography>
            {
           Object.entries(auth.userData).map(([k,v])=> 
                <ProfileItem k={k} v={v}></ProfileItem>
           )
            }
            <Button
                variant='outlined'
                sx={{ marginTop: '50px' }}
                
            > Reseteaza parola</Button>
        </Box>
    </Box> );
}
 
export default Profile;