let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn')

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let btnText = e.target.innerText;
        if(btnText == 'AC') {
            screen.value = "";
            return;
        }
        if(btnText == 'x') {
            btnText = '*';
        }
        if(btnText == '÷') {
            btnText = '/';
        }
        if(btnText == '=') {
            screen.value = eval(screen.value);
            return;
        }
        screen.value += btnText;
    })
})

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function square() {
    screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}

function log() {
    screen.value = Math.log(screen.value);
}

function pi() {
    screen.value = 3.14159265359;
}

function e() {
    screen.value = 2.71828182846;
}

function percent() {
    screen.value += "%*";
}

function fact() {
    let ans=1;
    let num = screen.value;
    for(let i=1; i<=num; i++) {
        ans = ans * i;
    }
    screen.value = ans;
}

function backSpace() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}
