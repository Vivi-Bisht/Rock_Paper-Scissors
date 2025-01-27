let computerChoice="" , userChoice="";

function computerChoiceGenerator(){
      let random_number = Math.random() * 3;

    if(random_number<=1){
        computerChoice = "rock";
        console.log(`computer choice : ${computerChoice}`);
    }
    else if(random_number<=2){
        computerChoice = "paper";
        console.log(`computer choice : ${computerChoice}`);
    }
    else{
        computerChoice = "scissors";
        console.log(`computer choice : ${computerChoice}`);
    }

    return computerChoice;
}

var a = document.querySelector("#rock");
var b = document.querySelector("#paper");
var c = document.querySelector("#scissors");

a.addEventListener("click",function(){
  computerChoice = computerChoiceGenerator();

  userChoice = "rock";
  document.querySelector("#user").value = "rock";
  document.querySelector("#computer").value = computerChoice;


  if(userChoice == "rock" && computerChoice == "rock"){
    document.querySelector("#result").value = "It's a tie!!";
  }
  else if(userChoice == "rock" && computerChoice == "paper"){
    document.querySelector("#result").value = "Computer Wins!!";
  }
  else{
    document.querySelector("#result").value = "User Wins!!";
  }

})

b.addEventListener("click",function(){
  computerChoice = computerChoiceGenerator();

  userChoice = "paper";
  document.querySelector("#user").value = "paper";
  document.querySelector("#computer").value = computerChoice;


  if(userChoice == "paper" && computerChoice == "paper"){
    document.querySelector("#result").value = "It's a tie!!";
  }
  else if(userChoice == "paper" && computerChoice == "rock"){
    document.querySelector("#result").value = "User Wins!!";
  }
  else{
    document.querySelector("#result").value = "Computer Wins!!";
  }
})

  c.addEventListener("click",function(){
    computerChoice = computerChoiceGenerator();
  
    userChoice = "scissors";
    document.querySelector("#user").value = "scissors";
    document.querySelector("#computer").value = computerChoice;
  
  
    if(computerChoice == "scissors"){
      document.querySelector("#result").value = "It's a tie!!";
    }
    else if(computerChoice == "paper"){
      document.querySelector("#result").value = "User Wins!!";
    }
    else{
      document.querySelector("#result").value = "Computer Wins!!";
    }
  })