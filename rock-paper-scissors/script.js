'use strict';

function getAccess() {
    window.rockB = document.querySelector('button:first-child');
    window.paperB = document.querySelector('button:nth-child(2)');
    window.scissorB = document.querySelector('button:nth-child(3)');
    window.youChosen = document.querySelector('.chosen > span:last-child');
    window.botChosen = document.querySelector('.chosen > span:first-child');
    window.log = document.querySelector('.status');
    window.youScore = document.querySelector('.score > span:last-child');
    window.botScore = document.querySelector('.score > span:first-child');
}
function init() {
    window.rockB.onclick = () => process('Rock');
    window.paperB.onclick = () => process('Paper');
    window.scissorB.onclick = () => process('Scissor');
    window.addEventListener('keyup', (event) => {
        const elem = (event.key === 'r') ? window.rockB :
                            (event.key === 'p') ? window.paperB :
                            (event.key === 's') ? window.scissorB :
                            undefined;
        elem.click();
        elem.className = '';
    })
    window.addEventListener('keydown', (event) => {
        const elem = (event.key === 'r') ? window.rockB :
                            (event.key === 'p') ? window.paperB :
                            (event.key === 's') ? window.scissorB :
                            undefined;
        if (elem) {
            elem.className = 'active';
        }
    })
}
function process(source) {
    const chosen = botChoose();
    window.youChosen.textContent = source;
    window.botChosen.textContent = chosen;
    const status = determine(source, chosen);
    update(status);
}
function botChoose() {
    const elem = ["Rock", "Paper", "Scissor"];
    const chosen = elem[Math.floor(Math.random() * elem.length)];
    return chosen;
}
function determine(youElem, botElem) {
    const nums = {Rock: 0, Paper: 1, Scissor: 2};
    const you = nums[youElem];
    const bot = nums[botElem];
    if ((bot + 1) % 3 === you) {
        return 1;
    } else if (bot === you) {
        return 0;
    } else {
        return -1;
    }
}
function update(status) {
    let color;
    switch (status) {
        case 1:
            window.log.textContent = "You Won";
            window.youScore.textContent = +window.youScore.textContent + 1;
            color = 'aquamarine';
            window.botChosen.style.opacity = '0.5';
            window.youChosen.style.opacity = '1';
            window.youChosen.style.textShadow = '0 0 4px #616868';
            window.botChosen.style.textShadow = 'none';
            break;
        case 0:
            window.log.textContent = "It's a draw";
            color = 'inherit';
            window.botChosen.style.opacity = '1';
            window.youChosen.style.opacity = '1';
            window.youChosen.style.textShadow = 'none';
            window.botChosen.style.textShadow = 'none';
            break;
        case -1:
            window.log.textContent = "You Lose";
            window.botScore.textContent = +window.botScore.textContent + 1;
            color = 'aquamarine';
            window.botChosen.style.opacity = '1';
            window.youChosen.style.opacity = '0.5';
            window.youChosen.style.textShadow = 'none';
            window.botChosen.style.textShadow = '0 0 4px #616868';
            break;
    }
    window.log.style.color = color;
}
getAccess();
init();