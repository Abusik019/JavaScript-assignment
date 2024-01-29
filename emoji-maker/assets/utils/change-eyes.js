export default function eyesRendering(eyes){
    const img = document.getElementById('eyes');
    img.setAttribute('src', `./assets/eyes/${eyes}.png`);
}
