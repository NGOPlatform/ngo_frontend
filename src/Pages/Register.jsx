import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { jwtDetails } from '../Globals';
import * as jose from 'jose';
import { validatePassword, validateEmail, valuesAreEqual, isValidRegisterData, isStringNullOrEmpty } from '../services/Validators'
import { useNavigate } from 'react-router-dom';
const registerWrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

}
const registerBoxStyle = {
    borderRadius: '12px',
    background: '#e0e0e0',
    // boxShadow: '7px 7px 19px #d0d0d0, -7px -7px 19px #f0f0f0',
    border:'1px solid rgba(0, 0, 0, 0.23)',
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
    const navigate = useNavigate();
    //label must be equal to field in registerData
    const [inputs, setInputs] = useState([
        { label: 'firstName', value: '', type: 'text', error: false, helperText: 'Introduceti numele', errorHelperText: 'Numele nu trebuie sa fie gol' },
        { label: 'lastName', value: '', type: 'text', error: false, helperText: 'Introduceti prenumele', errorHelperText: 'Prenumele nu trebuie sa fie gol' },
        { label: 'email', value: '', type: 'email', error: false, helperText: 'Introduceti email-ul' , errorHelperText: 'Email-ul este invalid'},
        { label: 'confirmEmail', value: '', type: 'email', error: false, helperText: 'Confirmati email-ul', errorHelperText: 'Email-urile nu coincid' },
        { label: 'password', value: '', type: 'password', error: false, helperText: 'Introduceti parola', errorHelperText: 'Parola nu este corecta' },
        { label: 'confirmPassword', value: '', type: 'password', error: false, helperText: 'Confirmati parola', errorHelperText: 'Parolele nu coincid' },

    ]);

    const handleChangeInputData = (e, input) => {
        let newInputs = [...inputs];
        let index = inputs.findIndex(el => el === input);
        newInputs[index].value = e.target.value;
        newInputs[index].error = !checkValidity(newInputs[index].label);
        setInputs(newInputs);
    }




    const handleRegister = async () => {
        let registerData = ExtractRegisterData();
        let userData = {};
        if (!isValidRegisterData(registerData)) return;
        // console.log('flag2')
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
        navigate('/login');
    }

    const ExtractRegisterData = () => {
        let newInputs = [...inputs];
        newInputs = newInputs.reduce((o, el) => ({ ...o, [el.label]: el.value }), {});
        return newInputs;
    }

    const checkValidity = (l) => {
        let formdata = ExtractRegisterData();
        let { firstName, lastName, email, confirmEmail, password, confirmPassword } = { ...formdata };
        if (l === 'password') {
            if (!validatePassword(password)) {
                return false;
            }
            return true;
        }
        if (l === 'confirmPassword') {
            if (!valuesAreEqual(password, confirmPassword)) {
                return false;
            }
            return true;
        }
        if (l === 'email') return validateEmail(email);
        if (l === 'confirmEmail' ) return validateEmail(confirmEmail);
        if (l === 'firstName') return !isStringNullOrEmpty(firstName);
        if (l === 'lastName') return !isStringNullOrEmpty(lastName);
    }

    return (<Box sx={registerWrapperStyle}>
        <Box sx={registerBoxStyle}>
            <Typography sx={{ gridColumn: '1 / 3' }}>{t("register_title")}</Typography>
            {inputs.map(l =>
                <TextField
                    key={l.label}
                    sx={{ width: '350px' }}
                    margin="normal" label={t(l.label)}
                    onChange={(e) => handleChangeInputData(e, l)}
                    type={l.type}
                    helperText={l.error ? l.errorHelperText : l.helperText }
                    error={l.error}
                    value={l.value} />
            )}
            <Button
                variant='outlined'
                sx={{ marginTop: '10px', gridColumn: '1 / 3',height:'50px' }}
                onClick={handleRegister}
            > {t('register_btn')}</Button>
        </Box>
    </Box>);
}

export default Register;