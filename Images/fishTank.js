/*
CPSC 2130 -- LAB 7 
YOUR NAME:  Tomas Gonzalez
YOUR STUDENT ID: 100266942
*/

var myCanvas = document.getElementById("myCanvas");
var myContext = myCanvas.getContext("2d");

var fishTank = new Image();
fishTank.src = "fishTank.gif";
fishTank.onload = function () 
{
    myContext.drawImage(fishTank, 800, 600);
}
