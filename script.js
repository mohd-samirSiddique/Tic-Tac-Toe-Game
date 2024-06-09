let btns = document.querySelectorAll('.btn')
let winMsg = document.querySelector('.winner_msg')
let msgDisplay = document.querySelector('.msg_dispaly')
let newGameBtn = document.querySelector('.new_game')
let restart = document.querySelector('.restart')

let possiblePattern =
    [[0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]]

let turno = true;
function newGame() {
    console.log('hi')
    turno = true;
    btnenable();
    winMsg.classList.add('hide')
}
function btnenable() {
    for (let btn of btns) {
        btn.disabled = false;
        btn.innerText = '';
    }
}
btns.forEach(btn => {
    btn.addEventListener('click', function () {
        if (turno) {
            // console.log('kdjkf')
            turno = false;
            btn.innerText = 'O'
        }
        else if (turno == false) {
            btn.innerText = 'X';
            turno = true;
        }
        btn.disabled = true;

        winnerPattern()
    })
});

function winnerPattern() {
    for (let pattern of possiblePattern) {
        // console.log(pattern[0],pattern[1],pattern[2])
        let pos1 = btns[pattern[0]].innerText;
        let pos2 = btns[pattern[1]].innerText;
        let pos3 = btns[pattern[2]].innerText;

        if (pos1 != '' && pos2 != '' && pos3 != '') {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log(pos1, 'is Winner')
                btnDisabled()
                winnerMsg(pos1)
            }
        }
    }
}

function btnDisabled() {
    for (let btn of btns)
        btn.disabled = true;
}
function winnerMsg(winner) {
    msgDisplay.innerText = `Congratulation, Winner is ${winner}`
    winMsg.classList.remove('hide')

}

newGameBtn.addEventListener('click', newGame)
restart.addEventListener('click', newGame)