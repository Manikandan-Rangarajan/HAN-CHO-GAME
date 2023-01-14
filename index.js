var randNum1 = Math.floor(Math.random()*6)+1;
var randImg1 = "dice"+ randNum1 + ".png";
var randImgSrc1 = "images/" + randImg1;
var image1 = document.querySelectorAll("img")[0].setAttribute("src",randImgSrc1);

var randNum2 = Math.floor(Math.random()*6)+1;
var randImg2 = "dice" + randNum2 + ".png";
var randImgSrc2 = "images/" + randImg2;
var image2 = document.querySelectorAll("img")[1].setAttribute("src",randImgSrc2);

var bet = randNum1 + randNum2;

if(bet%2!=0){
    document.querySelector("h3").innerHTML = "ODD WINS🏆";
}
else if(bet%2===0){
    document.querySelector("h3").innerHTML = "EVEN WINS🏆";
}
// if(randNum1>randNum2){
//     document.querySelector("h1").innerHTML = "PLAYER 1 WINS🏆";
// }
// else if(randNum1)