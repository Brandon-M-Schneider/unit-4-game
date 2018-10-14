var winCounter = 0;
var lossCounter = 0;
var targetNumber = Math.floor(Math.random() * 101) + 19;
$("#targetNumber").text("$" + targetNumber);



var Cry1 = Math.floor(Math.random() * 11) + 1;
var Cry2 = Math.floor(Math.random() * 11) + 1;
var Cry3 = Math.floor(Math.random() * 11) + 1;
var Cry4 = Math.floor(Math.random() * 11) + 1;


$("#winCounter").html(winCounter);
$("#lossCounter").html(lossCounter);

var counter = 0;
$("#curScore").text("$" + counter);

function restartGame() {

//Math.floor(Math.random()) for random images? May push later...//

targetNumber = Math.floor(Math.random() * 101) + 19;
$("#targetNumber").text("$" + targetNumber);
Cry1 = Math.floor(Math.random() * 11) + 1;
Cry2 = Math.floor(Math.random() * 11) + 1;
Cry3 = Math.floor(Math.random() * 11) + 1;
Cry4 = Math.floor(Math.random() * 11) + 1;
counter = 0;
$("#curScore").text("$" + counter);

}

function win() {

	alert("You win! You're going to the Showcase Showdown!");
	winCounter ++;
	$("#winCounter").text(winCounter);
	restartGame();
}

function lose() {

	alert("You lose! Better luck next time...");
	lossCounter ++;
	$("#lossCounter").text(lossCounter);
	restartGame();
}

$('#Prd1').on ('click', function(){
    counter = counter + Cry1;

    $('#curScore').text("$" + counter);

        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }
  });

$('#Prd2').on ('click', function(){
    counter = counter + Cry2;

    $('#curScore').text("$" + counter);

        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }
  });

$('#Prd3').on ('click', function(){
    counter = counter + Cry3;

    $('#curScore').text("$" + counter);

        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }
  });

$('#Prd4').on ('click', function(){
    counter = counter + Cry4;

    $('#curScore').text("$" + counter);

        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }
  });
