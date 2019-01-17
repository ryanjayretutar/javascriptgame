$(document).ready(function() {
	var scores = [0,0];
	var activePlayer = 1;
	var currentScore = 0;
	var gameOn =true;
	
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

			$(".game").removeClass('d-block');
			 $(".game").addClass('d-none');

			var elDiceOne = $("#dice1");
			var elDiceTwo = $("#dice2");
			elDiceOne.animate();
			elDiceTwo.animate();

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

			if(dice1 == 1 || dice2 == 1){			
				nextPlayer();
				$(".game").removeClass('d-none');
			 	$(".game").addClass('d-block');
			 	$(".game").html("You rolled a One. Player " + activePlayer + " turns.");
			}else{
				currentScore += dice1 + dice2;
				$(".current" + activePlayer).html(currentScore);
			}
			

	});

	$(".hold").on('click', function(event) {
		if(gameOn){
			scores[activePlayer-1] += currentScore;
			$(".score" + activePlayer).html(scores[activePlayer-1]);			
			 if (scores[activePlayer-1] >= 100) {
			 	$(".game").removeClass('d-none');
			 	$(".game").addClass('d-block');
			 	$(".game").html("Player " + activePlayer + " wins ! ! ! !");
			 	$(".die").css("display" , "none");
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
		activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
		$(".panel-" + activePlayer).addClass('active');
		$(".die").css({
			'display': 'none',
		});
		
	}
});



