import skinRendering from './assets/utils/change-skin.js';
import eyesRendering from './assets/utils/change-eyes.js';
import mouthRendering from './assets/utils/change-mouth.js';

//CONTAINERS
const   skinParent = document.getElementById('select-skin-card'),
        eyesParent = document.getElementById('select-eyes-card'),
        mountParent = document.getElementById('select-mouth-card');


//BUTTONS
const   showNextEyesBtn = document.querySelector('.next-step.show-eyes-card'),
        showSkinBtn = eyesParent.querySelector('.previous-step'),
        showMouthBtn = eyesParent.querySelector('.next-step'),
        showPrevEyesBtn = document.querySelector('.previous-step.show-eyes-card');


//IMG
const   yellowSkin = document.getElementById('yellow-skin'),
        greenSkin = document.getElementById('green-skin'),
        redSkin = document.getElementById('red-skin');

const   eyeNormal = document.getElementById('eye-normal'),
        eyeClosed = document.getElementById('eye-closed'),
        eyeLong = document.getElementById('eye-long'),
        eyeLaughing = document.getElementById('eye-laughing'),
        eyeRolling = document.getElementById('eye-rolling'),
        eyeWinking = document.getElementById('eye-winking');

const   mouthOpen = document.getElementById('mouth-open'),
        mouthSmiling = document.getElementById('mouth-smiling'),
        mouthStraight = document.getElementById('mouth-straight'),
        mouthSad = document.getElementById('mouth-sad'),
        mouthTeeth = document.getElementById('mouth-teeth');


//Moving through containers
showNextEyesBtn.addEventListener('click', () => {
    eyesParent.style.display = 'block';
    skinParent.style.display = 'none';
    mountParent.style.display = 'none';
})

showSkinBtn.addEventListener('click', () => {
    eyesParent.style.display = 'none';
    skinParent.style.display = 'block';
    mountParent.style.display = 'none';
})

showMouthBtn.addEventListener('click', () => {
    skinParent.style.display = 'none';
    eyesParent.style.display = 'none';
    mountParent.style.display = 'block';
})

showPrevEyesBtn.addEventListener('click', () => {
    eyesParent.style.display = 'block';
    skinParent.style.display = 'none';
    mountParent.style.display = 'none';
})


//Change skin
yellowSkin.addEventListener('click', () => {
    skinRendering('yellow')
})

greenSkin.addEventListener('click', () => {
    skinRendering('green')
})

redSkin.addEventListener('click', () => {
    skinRendering('red')
})


//Change eyes
eyeNormal.addEventListener('click', () => {
    eyesRendering('normal')
})

eyeClosed.addEventListener('click', () => {
    eyesRendering('closed')
})

eyeLong.addEventListener('click', () => {
    eyesRendering('long')
})

eyeLaughing.addEventListener('click', () => {
    eyesRendering('laughing')
})

eyeRolling.addEventListener('click', () => {
    eyesRendering('rolling')
})

eyeWinking.addEventListener('click', () => {
    eyesRendering('winking')
})


//Change mouth
mouthOpen.addEventListener('click', () => {
    mouthRendering('open');
})

mouthSmiling.addEventListener('click', () => {
    mouthRendering('smiling');
})

mouthStraight.addEventListener('click', () => {
    mouthRendering('straight');
})

mouthSad.addEventListener('click', () => {
    mouthRendering('sad');
})

mouthTeeth.addEventListener('click', () => {
    mouthRendering('teeth');
})