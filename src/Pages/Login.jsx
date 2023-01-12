import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { Button, Typography, Container } from '@mui/material';
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import { jwtDetails } from '../Globals';
import * as jose from 'jose';
import { useNavigate } from 'react-router-dom';
import { UseLogin } from '../customHooks/UseUser';
const loginWrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height:'100%'

}
const loginBoxStyle = {
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    p: '20px',
    boxSizing: 'border-box',

}



const Login = ({onLoggedIn}) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        'email': '',
        'password': ''
    })

    const HandleChangeLoginData = (e, key) => {
        let newLoginData = Object.assign({}, loginData);
        newLoginData[key] = e.target.value;
        setLoginData(newLoginData)
    }

    const handleLogin = async () => {
        // let users = localStorage.getItem('users');
        // if (users == null) return;
        // users = JSON.parse(users);
        // let currentUser = users[loginData.email];
        // const secret = new TextEncoder().encode(
        //     jwtDetails.secret, //32 characters
        // )
        // const jwt = currentUser;
        // const { payload } = await jose.jwtDecrypt(jwt, secret);

        const foundUser = UseLogin('username','password');
        // console.log(payload);
        // if(payload.password === loginData.password){
        //     delete payload.password;
            onLoggedIn(true, foundUser );
        // }
        navigate('/');

    }


    return (
        <Container maxWidth="sm" sx={{ marginTop: '40px', marginBottom:'40px', paddingTop: '40px',
         backgroundColor: '#ffffff87', height:'calc(100vh - 48px - 120px)', borderRadius:'25px'}}>
    <div style={loginWrapperStyle}>
        <div style={loginBoxStyle}>
            <Typography>{t('Login_title')}</Typography>
            <TextField sx={{ width: '350px' }}  margin="normal" label={t("email")}
                value={loginData.email}
                onChange={(e) => HandleChangeLoginData(e, 'email')}
                type="email"
                />
            <TextField sx={{ width: '350px' }}  margin="normal"
                label={t("password")}
                value={loginData.password}
                onChange={(e) => HandleChangeLoginData(e, 'password')}
                type="password"
                />
            <Button
               variant="contained"
                sx={{ marginTop: '50px' }}
                onClick={handleLogin}
            > {t('Login_button')}</Button>
        </div>
    </div>
    </Container>);
}

export default Login;