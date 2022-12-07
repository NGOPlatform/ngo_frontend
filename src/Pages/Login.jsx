import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import { jwtDetails } from '../Globals';
import * as jose from 'jose';
import { useNavigate } from 'react-router-dom';

const loginWrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

}
const loginBoxStyle = {
    borderRadius: '12px',
    background: '#e0e0e0',
    // boxShadow: '7px 7px 19px #d0d0d0, -7px -7px 19px #f0f0f0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    p: '20px',
    boxSizing: 'border-box',
    border:'1px solid rgba(0, 0, 0, 0.23)'
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
        let users = localStorage.getItem('users');
        if (users == null) return;
        users = JSON.parse(users);
        let currentUser = users[loginData.email];
        const secret = new TextEncoder().encode(
            jwtDetails.secret, //32 characters
        )
        const jwt = currentUser;
        const { payload } = await jose.jwtDecrypt(jwt, secret);
        // console.log(payload);
        if(payload.password === loginData.password){
            delete payload.password;
            onLoggedIn(true, payload );
        }
        navigate('/');

    }


    return (<Box sx={loginWrapperStyle}>
        <Box sx={loginBoxStyle}>
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
                variant='outlined'
                sx={{ marginTop: '50px' }}
                onClick={handleLogin}
            > {t('Login_button')}</Button>
        </Box>
    </Box>);
}

export default Login;