var player1Score = Math.round((Math.random()*5)+1);
var player2Score = Math.round((Math.random()*5)+1);

var randomDiceImage = "dice" + player1Score + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomImageSource2 = "images/dice" + player2Score +".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2 );

if(player1Score>player2Score){
    document.querySelector('h1').innerHTML = "🚩 Player 1 Wins!";
}
else if(player1Score<player2Score){ 
    document.querySelector('h1').innerHTML = "🚩 Player 2 Wins!";
}
else{
    document.querySelector('h1').innerHTML = "It's a draw!";
}