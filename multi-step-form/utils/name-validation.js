const firstNameError = document.getElementById('first_name_error');

export default function nameValidation(nameArg){
    if(!nameArg){
        firstNameError.textContent = "Это поле не может быть пустым";
    } else{
        firstNameError.textContent = "Введите имя верно";
    }

    const regExp = /^[a-zа-я]{1,}$/i.test(nameArg);

    if(!regExp){
        firstNameError.style.display = 'block';
        return false
    } else{
        firstNameError.style.display = 'none';
        return true
    }
}
