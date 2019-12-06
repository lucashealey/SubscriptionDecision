//Royale With Cheese
//Final Project
//JavaScript code for index.html
		

var imgCar = new Array();
var x = document.getElementById("slide");

imgCar[0] = new Image();
imgCar[0].src = "img11.jpg";

imgCar[1] = new Image();
imgCar[1].src = "img2.jpg";

imgCar[2] = new Image();
imgCar[2].src = "img3.jpg";

imgCar[3] = new Image();
imgCar[3].src = "img4.jpeg";

var count=0;

x.src=imgCar[count].src;

function Next(){
	if (count<3){
	count++;}
	else{
	count=0;}
	x.src=imgCar[count].src;
}

function Back(){
	if (count>0){
	count--;}
	else{
	count=3;}
	x.src=imgCar[count].src;
}


