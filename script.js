const lampada = document.querySelector('#lamp');
const turnOnOff = document.querySelector('#turnOnOff');
const concertar = document.querySelector('#rest')

function isLampBroken() {
    return lampada.src.indexOf('quebrada') > -1;
}

function lampOnOff() {
    if (!isLampBroken()) {
        if (turnOnOff.textContent == 'Ligar') {
            lampOn();
            turnOnOff.textContent = 'Desligar';
            turnOnOff.style.backgroundColor = '#ff2a2a';
        } else {
            lampOff()
            turnOnOff.textContent = 'Ligar'
            turnOnOff.style.backgroundColor = 'rgb(81, 188, 81)';
        }
    }
}

function lampOn() {
    if (!isLampBroken()) {
        lampada.src = './assets/ligada.jpg';
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lampada.src = './assets/desligada.jpg';
    }
}

function lampBroken() {
    lampada.src = './assets/quebrada.jpg';
    turnOnOff.textContent = 'desabled';
    turnOnOff.style.backgroundColor = 'rgb(244, 242, 242)';
}

function lampReturn() {
    lampada.src = './assets/desligada.jpg';
    turnOnOff.textContent = 'Ligar'
    turnOnOff.style.backgroundColor = 'rgb(81, 188, 81)';

}

turnOnOff.addEventListener('click', lampOnOff);
concertar.addEventListener('click', lampReturn)
lampada.addEventListener('mouseover', lampOn);
lampada.addEventListener('mouseleave', lampOff);
lampada.addEventListener('dblclick', lampBroken);
