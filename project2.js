function game()
{
    let pScore = 0;
    let cScore = 0;
    //Start the Game
    const again = document.querySelectorAll(".play button");
    if(again ==1)
      {
          pScore = 0;
          cScore = 0; 
      }
    function startGame()
    {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    //Play Match
    function playMatch(){
      const options = document.querySelectorAll(".options button");
      
      //Computer Options
      const computerOptions = ["Water", "Fire", "Wood"];
  
      options.forEach(option => {
        option.addEventListener("click", function() {
          //Computer Choice
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];
            //Here is where we call compare hands
            compareHands(this.textContent, computerChoice);
        });
      });
    };
    function updateScore () {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };
    function compareHands  (playerChoice, computerChoice)  {
      //Update Text
      const winner = document.querySelector(".winner");
      //Checking for a tie
      if (playerChoice === computerChoice) {
        winner.textContent = "It is a tie";
        return;
      }
      //Check for Water
      if (playerChoice === "Water") {
        if (computerChoice === "Wood") {
          pScore++;
          updateScore();
          if(pScore>cScore)
          {
            winner.textContent="Good keep on top";
          }
          else if(pScore<cScore)
          {
            winner.textContent="Good you can catch up";
          }
          else
          {
            winner.textContent="There is no winner here";
          }
          return;
        } else {
          cScore++;
          updateScore();
          if(pScore>cScore)
          {
            winner.textContent="Computer can catch you.";
          }
          else if(pScore<cScore)
          {
            winner.textContent="Computer is on top,you're bad";
          }
          else
          {
            winner.textContent="There is no winner here";
          }
          return;
        }
      }
      //Check for fire
      if (playerChoice === "Fire") {
        if (computerChoice === "Wood") {
          cScore++;
          updateScore();
          if(pScore>cScore)
          {
            winner.textContent="Computer can catch you.";
          }
          else if(pScore<cScore)
          {
            winner.textContent="Computer is on top,you're bad";
          }
          else
          {
            winner.textContent="There is no winner here";
          }
          return;
        } else {
          pScore++;
          updateScore();
          if(pScore>cScore)
          {
            winner.textContent="Good keep on top";
          }
          else if(pScore<cScore)
          {
            winner.textContent="Good you can catch up";
          }
          else
          {
            winner.textContent="There is no winner here";
          }
          return;
        }
      }
      //Check for Wood
      if (playerChoice === "Wood") {
        if (computerChoice === "Water") {
          cScore++;
          updateScore();
          if(pScore>cScore)
          {
            winner.textContent="Computer can catch you.";
          }
          else if(pScore<cScore)
          {
            winner.textContent="Computer on top,you're bad";
          }
          else
          {
            winner.textContent="There is no winner here";
          }
          return;
        } else {
          pScore++;
          updateScore();
          if(pScore>cScore)
          {
            winner.textContent="Good keep on top";
          }
          else if(pScore<cScore)
          {
            winner.textContent="Good you can catch up";
          }
          else
          {
            winner.textContent="There is no winner here";
          }
          return;
        }
      }
      
    };
  
    //Is call all the inner function
    startGame();
    playMatch();
  };
  function myButton()
  {
      location.reload();
  }
  //start the game function
  game();
