import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { Button, Typography, Container } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { validatePassword, validateEmail, valuesAreEqual, isValidRegisterData, isStringNullOrEmpty } from '../services/Validators'
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../customHooks/UserRepository';
const registerWrapperStyle = {
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
    height:'100%'

}
const registerBoxStyle = {
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',
    gap: '0 20px'
}

const Register = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    //label must be equal to field in registerData
    const [inputs, setInputs] = useState([
        { label: 'username', value: '', type: 'text', error: false, helperText: 'Introduceti numele de utilizator', errorHelperText: 'Numele de utilizator nu trebuie sa fie gol' },
        { label: 'email', value: '', type: 'email', error: false, helperText: 'Introduceti email-ul' , errorHelperText: 'Email-ul este invalid'},
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
        if (!isValidRegisterData(registerData)) return;
        console.log(registerData)
        const data = await registerUser(registerData.username, registerData.email,registerData.password);
        console.log(data)
        if(data.success)
            navigate('/login');
        else console.log('error')
        }

    const ExtractRegisterData = () => {
        let newInputs = [...inputs];
        newInputs = newInputs.reduce((o, el) => ({ ...o, [el.label]: el.value }), {});
        return newInputs;
    }

    const checkValidity = (l) => {
        let formdata = ExtractRegisterData();
        let { username, email, password, confirmPassword } = { ...formdata };
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
        if (l === 'username') return !isStringNullOrEmpty(username);
    }

    return (
        <Container maxWidth="md" sx={{ marginTop: '40px', marginBottom:'40px',
        backgroundColor: '#ffffff87', height:'calc(100vh - 48px - 120px)', borderRadius:'25px'}}>
    <div style={registerWrapperStyle}>
        <div style={registerBoxStyle}>
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
                variant="contained"
                sx={{ marginTop: '10px', gridColumn: '1 / 3',height:'50px' }}
                onClick={handleRegister}
            > {t('register_btn')}</Button>
        </div>
    </div>
    </Container>);
}

export default Register;