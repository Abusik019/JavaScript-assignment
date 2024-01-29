const questionsAPI = 'https://5d76bf96515d1a0014085cf9.mockapi.io/quiz';
let myGlobalData;
export let result = 0;

async function getData(){
    try {
        const response = await fetch(questionsAPI);
        const data = await response.json();
        myGlobalData = data;
        
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

export default function checkingAnswer(quiz, resultSpan){
    quiz.forEach(input => {
        input.addEventListener('click', () => {
            const clickedRadio = input;
            const inputs = document.getElementsByName(clickedRadio.name);
    
            inputs.forEach(radio => {
                if (radio !== clickedRadio) {
                    radio.disabled = true;
                }
            });
    
            getData()
                .then(() => {
                    myGlobalData.forEach(item => {
                        if(item.id === 1){
                            if(parseInt(clickedRadio.value) === item.answer){
                                clickedRadio.parentElement.parentElement.style.backgroundColor = 'green';
                                result++;
                                resultSpan.textContent = `${result}/5`;
                            } else{
                                clickedRadio.parentElement.parentElement.style.backgroundColor = 'red';
    
                                inputs.forEach(input => {
                                    if(parseInt(input.value) === item.answer){
                                        input.parentElement.parentElement.style.backgroundColor = 'green';  
                                    }
    
                                    return
                                })
                            }                    
                        }
    
                        return
                    });
                })
        });
    });
}