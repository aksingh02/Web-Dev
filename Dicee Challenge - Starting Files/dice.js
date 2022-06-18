//for player 1
var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
var randomImages1 = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImages1);

//for player 1
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImages2 = "images/dice" + randomNumber2 + ".png";
var images2 = document.querySelectorAll("img")[1].setAttribute("src", randomImages2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🎉 Player 1 Wins";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins 🎉";
}
else{
    document.querySelector("h1").innerHTML = "Draw! 😐";
}