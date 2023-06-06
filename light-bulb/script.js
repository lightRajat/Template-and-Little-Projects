let light = document.getElementById('light'), glowing;
if (light.innerHTML.toLowerCase() == 'off') {
    glowing = false;
} else {
    glowing = true;
    light.className = "light-on";
}
function switchLight() {
    if (glowing) {
        light.innerHTML = "Off";
        light.removeAttribute('class');
    } else {
        light.innerHTML = "On";
        light.className = "light-on";
    }
    glowing = !glowing;
}
document.getElementById('switch').addEventListener('click', switchLight);