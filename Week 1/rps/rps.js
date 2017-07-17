var prompt= require("prompt-sync")();
var playerChoice=prompt("Choose between r, s, and p ");
var cpuChoice= "s";

if (playerChoice=="r" && cpuChoice=="p"){
    console.log("CPU won because it choice paper");

}

if (playerChoice=="r" && cpuChoice == "s"){
    console.log("You won because you chose rock.");
}

if (playerChoice == cpuChoice)
{
    console.log("Its a draw");
}

if (playerChoice=="s" && cpuChoice=="p")
{
    console.log("You win cuz scissors beats paper");
}

if (playerChoice=="s" && cpuChoice=="r")
{
    console.log("You lose because rocks beats scissors");
}

if (playerChoice=="p" && cpuChoice=="r")
{
    console.log("You win cuz paper beats rock");
}

if (playerChoice=="p" && cpuChoice=="s")
{
    console.log("You lose because paper loses against scissor");
}