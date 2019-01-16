$(document).ready(function(){
	var scores = [0,0];
	var roundscores = 0;
	var activePlayer = 0;


	

	$(".roll").on("click", function(){
		var dice = Math.floor(Math.random() * 6) + 1;
		$(".dice1").find("h1").replaceWith("<h1>" + dice + "</h1>");
		$(".dices").attr("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/243004/dice-" + dice + ".png");

	});
		

});

