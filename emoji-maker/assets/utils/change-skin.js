export default function skinRendering(color){
    const img = document.getElementById('skin');
    img.setAttribute('src', `./assets/skin/${color}.png`);
}
