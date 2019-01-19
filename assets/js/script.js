$(document).ready(function() {

	var scores = [0,0];
	var activePlayer = 1;
	var currentScore = 0;
	var gameOn =true;
	// $(".dice-board").hide();

	$(".asd").click(function(){
				$(".modal").slideUp(400);
				$(".dice-board").hide();
				if (activePlayer ===1 ) {
					$(".panel-2").slideUp(400);
					$(".control-box").removeClass('offset-lg-4');
				}else{
					$(".control-box").addClass('offset-lg-4');
					$(".panel-1").slideUp(400);
				}
				$(".panel-" + activePlayer).slideDown("fast");
	});

	$(".new").click(function(event) {
		init();
	});
		
	$(".roll").on('click', function(event) {
		dice1 = Math.floor(Math.random() * 6) + 1;
		dice2 = Math.floor(Math.random() * 6) + 1;
		$(".dice1").find('img').attr('src', 'assets/images/dice-' + dice1 + ".png").css({
			'height': '150px',
			'width': '150px'
		});
		$(".dice2").find('img').attr('src', 'assets/images/dice-' + dice2 + ".png").css({
			'height': '150px',
			'width': '150px'
		});
			$(".die").css({
				'display': 'block',				
			});

			var elDiceOne = $("#dice1");
			var elDiceTwo = $("#dice2");
		
			$(".dice-board").show();
			$(".dice-board").css("height", "0");

			elDiceOne.removeAttr('style');
			elDiceTwo.removeAttr('style');
			 $('.roll').attr('disabled', 'disabled');
			  $('.hold').attr('disabled', 'disabled');
			if(activePlayer == 1){
				$(".panel-2").slideUp(400);
				$(".panel-1").slideDown(400);
				$(".control-box").removeClass('offset-lg-4');
				$(".dice-board").removeClass("offset-lg-9");
				elDiceOne.animate({
				position: 'absolute',
				display: 'block',
				left: '+=625px',
				top: '+=380px',
				zIndex: '9999'},
				2000);
				elDiceTwo.animate({
				position: 'absolute',
				display: 'block',
				left: '+=320px',
				top: '+=175px',
				zIndex: "9999"},
				2000, function(){
					$(".roll").removeAttr('disabled');
					$(".hold").removeAttr('disabled');	
					showMessage();		
				});
			}
			if(activePlayer == 2) {
				$(".panel-1").slideUp(400);
				$(".panel-2").slideDown(400);
				$(".control-box").addClass('offset-lg-4');
				$(".dice-board").addClass("offset-lg-9");
				elDiceOne.animate({
				position: 'absolute',
				display: 'block',
				left: '-=520px',
				top: '+=165px',
				zIndex: '9999'},
				2000);
				elDiceTwo.animate({
				position: 'absolute',
				display: 'block',
				left: '-=822px',
				top: '+=370px',
				zIndex: "9999"},
				2000, function(){
				$(".hold").removeAttr('disabled');
				$(".roll").removeAttr('disabled');	
					showMessage();		
				});
			}
			
			// $(".dice-board").hide();

			 //Dice reset and display
			  for (var i = 1; i <= 6; i++) {
			    elDiceOne.removeClass('show-' + i);
			    if (dice1 === i) {
			     
			      elDiceOne.addClass('show-' + i);
			    }
			  }

			  for (var k = 1; k <= 6; k++) {
			    elDiceTwo.removeClass('show-' + k);
			    if (dice2 === k) {
			      elDiceTwo.addClass('show-' + k);
			    }
			  }
			// comeOutRoll();

			
	});

	$(".hold").on('click', function(event) {
		if(gameOn){
			scores[activePlayer-1] += currentScore;
			$(".score" + activePlayer).html(scores[activePlayer-1]);			
			 if (scores[activePlayer-1] >= 100) {
			 	var h1 = $(".modal").find('h1');
			 	$(".modal").slideDown('400');				
				// $(".modal").find('button').css("display", "block");
				h1.find("h1").animate({
						fontSize: "250%",
						fontWeight: "bold",
						left: '400px',
						top: '500px'
					}, 200);
			 	h1.html("Player " + activePlayer + " wins ! ! ! !");
			 	$("h1").find('button').hide();
			 	$(".modal").find("button").html("Play Again");
			 	gameOn = false;	            
           
	        } else {
	            //Next player
	            nextPlayer();
	        }
	    }
			
	});

	function nextPlayer(){
		currentScore = 0;
		$(".current" + activePlayer).html(0);
		$(".panel-" + activePlayer).removeClass('active');
		$(".die").hide();
		// $(".panel-" + activePlayer).hide();
		if (activePlayer ===1 ) {
					activePlayer = 2;
					$("#dice1").hide();
					$("#dice2").hide();
					$(".panel-1").hide();
					$(".control-box").addClass('offset-lg-4');
				}else{
					activePlayer = 1;
					$("#dice1").hide();
					$("#dice2").hide();
					$(".control-box").removeClass('offset-lg-4');
					$(".panel-2").slideUp("slow");
				}
		$(".panel-" + activePlayer).addClass('active');
		$(".panel-" + activePlayer).slideDown("slow");
		
	}

	function showMessage(){
		$(".roll").removeAttr('disabled');
					if(dice1 == 1 || dice2 == 1){			
				$(".modal").slideDown('400');				
				// $(".modal").find('button').css("display", "block");
				$(".modal").find("h1").animate({
						fontSize: "250%",
						fontWeight: "bold",
						left: '200px',
						top: '200px'
					}, 200);
				$(".modal").find("button").animate({
						fontSize: "120%",
						fontWeight: "bold",
						left: '670px',
						top: '300px',

					}, 200);

				nextPlayer();
				if(activePlayer == 2){
					$("#dice2").css({
					position: 'absolute',
					display: 'block',
					left: '+=270px',
					top: '+=215px',
					zIndex: '9999'});

					$("#dice1").css({
					position: 'absolute',
					display: 'block',
					left: '+=200px',
					top: '+=10px',
					zIndex: '9999'});
				}	
				
					// $(".game").css("background-color", "rgba(0,0,0,0.8)");
				// $(".game").show(200);
			 	$(".modal").find("h1").html("You rolled a One. Player " + activePlayer + " turns.");
			 	$(".modal").find("button").html("Player " + activePlayer + " Roll");
			}else{
				currentScore += dice1 + dice2;
				$(".current" + activePlayer).html(currentScore);
			}
	}

	function init(){
		var scores = [0,0];
		var activePlayer = 1;
		var currentScore = 0;
		var gameOn = true;
		$(".score1").html(0);
		$(".score2").html(0);
		$(".current1").html(0);
		$(".current2").html(0);
		// $(".panel-1").slideUp("slow");
		// $(".panel-2").slideUp("slow");
		// $(".panel-1").slideDown();
		$(".modal").find("h1").html("");
		$(".modal").find('button').html("");
		$(".asd").hide();
		$(".modal").slideDown("slow", function(){
			$(".panel-1").slideDown();
		$(".panel-2").slideDown();
		$(".top").hide();
		});
		$(".modal").slideUp("slow",function(){
			
		$(".top").show();
		});
		
		$(".dice-box").hide();
		$(".control-box").removeClass('offset-lg-4');
		$(".panel-1").addClass('active');
		$(".panel-2").removeClass('active');

	}
});






