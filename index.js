var readlineSync=require('readline-sync');
var chalk=require('chalk');
var userName=readlineSync.question(chalk.bgBlue("May I have your name please? "))
console.log()
var score=0;
console.log(chalk.green("Welcome! " + userName))
console.log()
console.log(chalk.bold.green("Let's see how well do you know Ayush "))
console.log()
  console.log()

  function play(question,answer){
    var ans=readlineSync.question(question);
    // return ans;
    console.log()
    if(ans===answer){
      console.log(chalk.green("RIGHT!"))
      score=score+4;
      console.log("Your Score: " +chalk.green.bold(score))
    }
    else{
      console.log(chalk.red("WRONG!"));
      score=score-2;
            console.log("Your Score: " +chalk.red.bold(score))

    }
  }


  


let questions=[
play(chalk.bgRed("Q1: ") +chalk.bgWhite.black.bold("What is Ayush's Surname? \n\n") +chalk("a:Shukla \n b:Agrawal \n c:Shah \n d:Tiwari   "),("b")),

play(chalk.bgRed("Q2: ") +chalk.bgWhite.bold.black("Which platform does Ayush uses the most? \n\n") +("a:Instagram \n b:Spotify \n c:Youtube \n d:Snapchat  "),"c"),

play(chalk.bgRed("Q3: ") +chalk.bgWhite.black.bold("Which one is Ayush's favourite anime? \n\n") +chalk("a:Naruto \n b:Cowboy bebop \n c:DragonBall-Z \n d:Death Note   "),("d")),

play(chalk.bgRed("Q4: ") +chalk.bgWhite.black.bold("Which book genre is Ayush's favourite \n\n") +chalk("a:Psychology \n b:Crime-fiction \n c:Philosophy \n d:Fantasy   "),("c")),

play(chalk.bgRed("Q5: ") +chalk.bgWhite.black.bold("How is Ayush likely to describe himself? \n\n") +chalk("a:Curious \n b:Wierd \n c:Ambitious \n d:Silly   "),("a")),

play(chalk.bgRed("Q6: ") +chalk.bgWhite.black.bold("Who is Ayush's Favourite Athelete of all time \n\n") +chalk("a:Virat Kohli \n b:David Goggins \n c:Mike Tyson \n d:Kobe Bryant   "),("b")),

play(chalk.bgRed("Q7: ") +chalk.bgWhite.black.bold("Which of the following personality would Ayush meet if given a chance\n\n") +chalk("a:Elon Musk \n b:Kevin Hart \n c:Narendra Modi \n d:Naval Ravikant  "),("c")),

play(chalk.bgRed("Q8: ") +chalk.bgWhite.black.bold("What would Ayush likely to take from the following \n\n") +chalk("a:1 Crore Rs in Bank account \n b:Perfect health for the next 10years \n c:Youtube following of 1M+ \n d:A seculded luxurious life   "),("a")),

play(chalk.bgRed("Q9: ") +chalk.bgWhite.black.bold("Which is Ayush's favourite sport? \n\n") +chalk("a:Swimming \n b:Chess \n c:Boxing \n d:Cricket   "),("d")),

play(chalk.bgRed("Q10: ") +chalk.bgWhite.black.bold("Which of the following games has Ayush played the most \n\n") +chalk("a:PUBG \n b:DOTA \n c:Clash of Clans \n d:Chess   "),("c")),

]
// for(i=0;i<questions.length;i++){
//   var currentAnswer=questions[i];
//   console.log(currentAnswer);
// }


console.log()
console.log()

console.log(chalk.bold.green("Thanks for playing the quiz.Hope you had Fun!"))
console.log(chalk.black.bold.bgWhite("Your Final Score: ") + score)

