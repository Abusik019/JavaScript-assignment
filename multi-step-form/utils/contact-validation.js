const contactError = document.getElementById('contact_error');

export default function contactValidation(contactArg){
    if(!contactArg){
        contactError.textContent = "Это поле не может быть пустым";
    } else{
        contactError.textContent = "Введите номер верно";
    }

    const regExp = /\+?[0-9]{11}/.test(contactArg);

    if(!regExp){
        contactError.style.display = 'block';
        return false
    } else{
        contactError.style.display = 'none';
        return true
    }
}
