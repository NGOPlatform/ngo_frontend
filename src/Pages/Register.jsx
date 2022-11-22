import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import {encryption, jwtDetails } from '../Globals';
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
    
    const handleRegister = async ()=>{
        let publicData = {};
        let privateData = {'email':registerData.email, 'password':registerData.password};
        const secret = jose.base64url.decode('zH4NRP1HMALxxCFnRZABFA7GOJtzU_gIj02alfL1lvI')
        const jwt = await new jose.EncryptJWT({ 'urn:example:claim': true })
          .setProtectedHeader({ alg: 'dir', enc: 'A128CBC-HS256' })
          .setIssuedAt()
          .setIssuer('urn:example:issuer')
          .setAudience('urn:example:audience')
          .setExpirationTime('2h')
          .encrypt(secret)
        console.log(jwt)
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