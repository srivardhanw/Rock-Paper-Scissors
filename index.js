const human = document.getElementById("human");
const computer = document.getElementById("computer");
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const result = document.getElementById('res');
const reset = document.getElementById('reset');


const arr = ["✊", "🖐️", "✌️"];

let intervalId;
let index = 0;

const changeComputerSign = () => {
    computer.innerHTML = arr[index];
    index = index + 1;
    if(index > 2) index = 0;
}

const startInverval = () => {
    intervalId = setInterval(changeComputerSign, 85);
}
startInverval();

const determineWinner = (playerChoice, computerChoice) => {
    reset.style.display = "block";
    if (playerChoice == computerChoice) {
        console.log(playerChoice, computerChoice);
        return "It's a Draw!";
    }
    else if (playerChoice == '1' && computerChoice == '0' || // paper, rock
        playerChoice == '0' && computerChoice == '2' || //rock , scissors
        playerChoice == '2' && computerChoice == '1'    //scissors, paper  
    ) {
        return "You Win!!";
    }
    else {
        return "Computer Wins!";
    }
    return null;
}

const handleReset = () => {
    startInverval();
    human.innerHTML = arr[0];
    result.innerHTML = "";
    rock.addEventListener('click', handleClickEvent);
    paper.addEventListener('click', handleClickEvent);
    scissors.addEventListener('click', handleClickEvent);
    reset.style.display = "none";
}

const handleClickEvent = async (e) => {
    const playerChoice = e.target.dataset.key;
    human.innerHTML = arr[playerChoice];

    clearInterval(intervalId);

    const computerChoice = Math.floor(Math.random() * arr.length);
    computer.innerHTML = arr[computerChoice];

    const msg = determineWinner(playerChoice, computerChoice);
    result.innerHTML = msg;

    rock.removeEventListener('click', handleClickEvent);
    paper.removeEventListener('click', handleClickEvent);
    scissors.removeEventListener('click', handleClickEvent);

}



rock.addEventListener('click', handleClickEvent);
paper.addEventListener('click', handleClickEvent);
scissors.addEventListener('click', handleClickEvent);
reset.addEventListener('click', handleReset);




