var Player1Score = 0; //player's score
var computerScore = 0; //computer's score

document.getElementById('rock').onclick = Rock;
document.getElementById('paper').onclick = Paper;
document.getElementById('scissors').onclick = Scissors;

function Rock() {
  play("rock");
}
function Paper() {
  play("paper");
}
function Scissors() {
  play("scissors");
}

function play(Player1) {
  
  computerPlayer = getComputerPlayer();
  
  document.getElementById('status').innerHTML = "<p>You played <strong>" + Player1 + "</strong>. The computer played <strong>" + computerPlayer + "</strong>.</p>";
  
  if(Player1 == 'rock') {
    if(computerPlayer == 'rock') {
      document.getElementById('status').innerHTML += "<p>It's a Draw </p>";
    } else if (computerPlayer == 'paper') {
      document.getElementById('status').innerHTML += "<p>You lose </p>";
      computerScore++;
    } else if (computerPlayer == 'scissors') {
      document.getElementById('status').innerHTML += "<p>You win </p>";
      Player1Score++;
    }
  } else if (Player1 == 'paper') {
    if(computerPlayer == 'rock') {
      document.getElementById('status').innerHTML += "<p>You win </p>";
      Player1Score++;
    } else if (computerPlayer == 'paper') {
      document.getElementById('status').innerHTML += "<p>It's a Draw </p>";
    } else if (computerPlayer == 'scissors') {
      document.getElementById('status').innerHTML += "<p>You lose </p>";
      computerScore++;
    }  
  } else if (Player1 == 'scissors') {
    if(computerPlayer == 'rock') {
      document.getElementById('status').innerHTML += "<p>You lose </p>";
      computerScore++;
    } else if (computerPlayer == 'paper') {
      document.getElementById('status').innerHTML += "<p>You win </p>";
      Player1Score++;
    } else if (computerPlayer == 'scissors') {
      document.getElementById('status').innerHTML += "<p>It's a Draw </p>";
    }  
  }
  
  document.getElementById('Player1Score').innerHTML = Player1Score;
  document.getElementById('computerScore').innerHTML = computerScore;
  
}

//a fucntion to randomly choose between the 3 choices.
function getComputerPlayer() {
  var plays = ['rock', 'paper', 'scissors'];
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}
