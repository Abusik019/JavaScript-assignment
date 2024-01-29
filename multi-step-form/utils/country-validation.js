const countryError = document.getElementById('country_error');

export default function countryValidation(countryArg){
    if(!countryArg){
        countryError.textContent = "Это поле не может быть пустым";
    } else{
        countryError.textContent = "Введите страну верно";
    }

    const regExp = /[a-zа-я]+/i.test(countryArg);

    if(!regExp){
        countryError.style.display = 'block';
        return false
    } else{
        countryError.style.display = 'none';
        return true
    }
}
