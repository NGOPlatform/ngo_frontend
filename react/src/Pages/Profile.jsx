import { Box } from '@mui/system';
import { Button, grid2Classes, Typography } from '@mui/material';
import {Container} from '@mui/system';
import { List } from '@mui/material';


const Profile = ({userData}) => {
    return (
        
        // <Box sx={loginWrapperStyle}>
        // <Box sx={loginBoxStyle}>
        <Container maxWidth="md" sx={{
            marginTop: '40px', marginBottom: '40px', paddingTop: '40px', paddingBottom: '40px',
            backgroundColor: '#ffffff87',  borderRadius: '25px', display:'flex', flexDirection:'column',
            justifyContent:'center', alignContent:'center'
        }}>
            <Typography variant="h4" sx={{textAlign:'center'}}>Contul meu</Typography>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
                <Typography>username:</Typography>
                <Typography>{userData.username}</Typography>
                <Typography>email:</Typography>
                <Typography>{userData.email}</Typography>
                <Typography>Favorite adaugate recent:</Typography>
                <Typography>
                    <List >
                    {userData.favorites.slice(-3).map(el => el.name).map(el=>{
                        return (
                            <li>{el}</li>
                            )
                })
                } </List></Typography>
            </div>
            <Button
                variant='outlined'
                sx={{ marginTop: '50px' }}
                
            > Reseteaza parola</Button>
            </Container>
        );
}
 
export default Profile;