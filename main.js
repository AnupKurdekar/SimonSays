let gamesq = [];
let usersq = [];
let h3 = document.querySelector('h3');
let btns = ['red', 'yellow', 'green', 'purple'];

let started = false;
let level = 0;
document.addEventListener('keypress', function () {
    if (started == false) {
        console.log("game started");
        started = true;
        levelUp();
    }
});

function levelUp() {
    usersq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randomidx = Math.floor(Math.random() * 3);
    let randomcolor = btns[randomidx];
    // console.log(randomcolor);
    let randbtn = document.querySelector(`.${randomcolor}`);
    gamesq.push(randomcolor);
    buttonFlash(randbtn);
    // console.log(gamesq);
}

function buttonFlash(randbtn) {
    randbtn.classList.add('flash');
    // console.log(randbtn);
    setTimeout(function () {
        randbtn.classList.remove('flash');
    }, 250);
}
function btnPressed() {
    let btn = this;
    let usercolor = btn.getAttribute('id');
    usersq.push(usercolor);
    // console.log(`user pressed ${usercolor}`); // Corrected to use backticks
    userFlash(btn);
    checkValid(usersq.length - 1);

}
function userFlash(randbtn) {
    randbtn.classList.add('userflash');
    setTimeout(function () {
        randbtn.classList.remove('userflash');
    }, 250);
}

// Checking the both values
function checkValid(indx) {
    if (usersq[indx] === gamesq[indx]) {
        if (usersq.length === gamesq.length) {
            setTimeout(levelUp, 600);
        }

    } else {
        h3.innerHTML = `Game Over! <b> your score was ${level} </b> . <br> Press any key to Start`;
        let blink = document.querySelector('body');
        setTimeout(function () { blink.style.backgroundColor = 'red'; }, 100);
        setTimeout(function () { blink.style.backgroundColor = ''; }, 300);
        resetgame();
    }

}
let allbtns = document.querySelectorAll('.btn');

for (let btn of allbtns) { // added 'let' to declare 'btn' correctly
    btn.addEventListener('click', btnPressed);
}
function resetgame() {
    started = false;
    gamesq = [];
    usersq = [];
    level = 0;
}
