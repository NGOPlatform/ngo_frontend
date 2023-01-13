

var validatePassword = (password) => {
    return Boolean(password.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    ))
}

var validateEmail = (email) => {
    return Boolean(email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ));
};

var valuesAreEqual = (a,b) => {
    return a === b;
}

var isValidRegisterData = (registerData) => {
    if (!valuesAreEqual(registerData.password, registerData.confirmPassword)) return false;
    if (!valuesAreEqual(registerData.email, registerData.confirmEmail)) return false;
    if (!validateEmail(registerData.email)) return false;
    if (!validatePassword(registerData.password)) return false;
    return true;
}

var isStringNullOrEmpty = (str) =>{
    if(typeof str  === "undefined")return true;
    if(str === null)return true;
    if(str === "")return true;
    return false;
}

export {validatePassword,validateEmail, valuesAreEqual, isValidRegisterData,isStringNullOrEmpty }