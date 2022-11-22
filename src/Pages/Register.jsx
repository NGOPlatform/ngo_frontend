import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { jwtDetails } from '../Globals';
import * as jose from 'jose'
const registerWrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

}
const registerBoxStyle = {
    borderRadius: '12px',
    background: '#e0e0e0',
    boxShadow: '7px 7px 19px #d0d0d0, -7px -7px 19px #f0f0f0',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    flexDirection: 'column',
    alignItems: 'center',
    p: '20px',
    boxSizing: 'border-box',
    gap: '0 20px'
}

const Register = () => {
    const { t } = useTranslation();
    const [registerData, setRegisterData] = useState({
        'firstName': '',
        'lastName': '',
        'email': '',
        'confirmEmail': '',
        'password': '',
        'confirmPassword': ''
    });

    const handleChangeRegisterData = (e, key) => {
        let newRegisterData = Object.assign({}, registerData);
        newRegisterData[key] = e.target.value;
        setRegisterData(newRegisterData)
    }

    const handleRegister = async () => {
        let userData = {};
        Object.assign(userData, registerData);
        const secret = new TextEncoder().encode(
            jwtDetails.secret, //32 characters
        )
        const jwt = await new jose.EncryptJWT(userData)
            .setProtectedHeader({ alg: jwtDetails.alg, enc: jwtDetails.enc })
            .setIssuedAt()
            .setExpirationTime(jwtDetails.expirationTime)
            .encrypt(secret);
        let users;
        if (localStorage.getItem('users') != null)
            users = JSON.parse(localStorage.getItem('users'));
        else users = {};
        users[userData.email] = jwt;
        localStorage.setItem('users', JSON.stringify(users));
    }

    return (<Box sx={registerWrapperStyle}>
        <Box sx={registerBoxStyle}>
            <Typography sx={{ gridColumn: '1 / 3' }}>{t("register_title")}</Typography>
            {Object.keys(registerData).map(l =>
                <TextField
                    key={l}
                    sx={{ width: '350px' }}
                    variant="standard" margin="normal" label={t(l)}
                    onChange={(e) => handleChangeRegisterData(e, l)}
                    value={registerData[l]} />
            )}
            <Button
                variant='outlined'
                sx={{ marginTop: '50px', gridColumn: '1 / 3' }}
                onClick={handleRegister}
            > {t('register_btn')}</Button>
        </Box>
    </Box>);
}

export default Register;