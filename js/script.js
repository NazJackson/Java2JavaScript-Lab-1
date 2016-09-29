" use strict ";

var display = document.getElementById("display");

<<<<<<< HEAD
function oneToTen(){
	display.innerHTML = "";
  	for(var i = 1; i<= 10; i++){
		display.innerHTML += i + "<br>";	
	}
}

function oddNumbers(){
	display.innerHTML = "";
 	for(var i = 1; i< 20; i+=2){
 		console.log(i);
  		display.innerHTML += i + "<br>";	
  	}
}
function squareNumbers(){
	display.innerHTML = "";
 	for(var i = 1; i<= 10; i++){
  		display.innerHTML += Math.pow(i, 2) + "<br>";	
  	}
}
function randomNumbers(){
	display.innerHTML = "";
	for(var i = 0; i<4; i++){
		display.innerHTML += Math.round(Math.random()*100)+1 + "<br>";
	}
}
function evenNumbers(n){
	
	display.innerHTML = "";
	for(var i = 0; i<n; i+=2){
		display.innerHTML += i + "<br>";
	}
}
function powerNumber(n){
	display.innerHTML = "";
 	for(var i = 1; i<= n; i++){
  		display.innerHTML += Math.pow(2, i) + "<br>";	
  	}
}
function example(){
	while(true){
	var answer = prompt("Are we there yet?");
	if(answer.match("yes")){alert("Good");break;}
	}
}
function triangle(){
	var str = "*";
	for(var i = 0; i<=5; i++ ){
		display.innerHTML += str.repeat(i) + "<br>"
	}
}
function tableSquare(){
	
	for(var i = 1; i <=4; i++){
			display.innerHTML += "<br>";
		for(var j= 1; j<=4; j++){
			display.innerHTML += "|"+i*j+"|";
		}
	}
}
function tableSquare(n){
	
	for(var i = 1; i <=n; i++){
			display.innerHTML += "<br>";
		for(var j= 1; j<=n; j++){
			display.innerHTML += "|"+i*j+"|";
		}
	}
=======
function yourFunctionName (){
  display.innerHTML = "hello";
>>>>>>> b741e3801a753c87a0e0f0d2f43d495f4d17fb33
}
