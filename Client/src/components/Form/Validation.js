
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
// const regexPassword = !/.*\d+.*/;

function Validation(userData) {

    const errors = {};

    if (!regexEmail.test(userData.email)) {
        errors.email = "Email invalido";
    }
    if (!userData.email) {
        errors.email = "El nombre de usuario no puede estar vacío";
    }
    if (userData.email.length > 35) {
        errors.email = "El nombre de usuario no puede tener más de 35 caracteres";
    }
    if (userData.password.length < 6 || userData.password.lengt > 10) {
        errors.password = "La contraseña debe tener mas de 6 caracteres";
    }
    // if (!regexPassword.test(userData.password)) {
    //     errors.password = "la contraseña debe tener al menos un número";
    // }

    return errors;
}

export default Validation;