import checkingAnswer, { result } from './utils/checking-answers.js';

const resultSpan = document.getElementById('aside-counter').lastElementChild.lastElementChild;
const submitBtn = document.getElementById('btn-submit');
const finalResult = document.getElementById('result'); 
const modalWrapper = document.getElementById('modal-wrapper');
const   quiz1Questions = document.getElementsByName('q1'),
        quiz2Questions = document.getElementsByName('q2'),
        quiz3Questions = document.getElementsByName('q3'),
        quiz4Questions = document.getElementsByName('q4'),
        quiz5Questions = document.getElementsByName('q5');


checkingAnswer(quiz1Questions, resultSpan);
checkingAnswer(quiz2Questions, resultSpan);
checkingAnswer(quiz3Questions, resultSpan);
checkingAnswer(quiz4Questions, resultSpan);
checkingAnswer(quiz5Questions, resultSpan);

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()

    modalWrapper.style.display = 'block';
    finalResult.textContent = `${result}/5`;
})