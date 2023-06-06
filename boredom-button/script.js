const button = document.querySelector('button');
const colorTag = document.querySelector('span');

const hex = "0123456789abcdef";
function change() {
    let newColor = "#";
    for (let i = 0; i < 6; i ++) {
        newColor += hex[Math.floor(Math.random() * hex.length)];
    }
    document.body.style.backgroundColor = newColor;
    colorTag.textContent = newColor;
}
button.onclick = change;
window.addEventListener('keyup', (key) => {
    if (key.key === 'Enter' || key.key === ' ') {
        button.click();
    }
})