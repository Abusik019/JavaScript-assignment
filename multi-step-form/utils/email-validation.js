const emailError = document.getElementById('email_error');

export default function emailValidation(emailArg){
    if(!emailArg){
        emailError.textContent = "Это поле не может быть пустым";
    } else{
        emailError.textContent = "Введите почту верно";
    }

    const regExp = /^\w+@\w+\.\w+$/.test(emailArg);

    if(!regExp){
        emailError.style.display = 'block';
        return false
    } else{
        emailError.style.display = 'none';
        return true
    }
}
