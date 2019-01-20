$(document).ready(function() {

	var scores = [0,0];
	var activePlayer = 1;
	var currentScore = 0;
	var gameOn =true;


	// $(".dice-board").hide();
	$(".asd").click(function(){
		if(scores[0] >= 100 || scores[0] >= 100 ){
				init();
			}else{
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
			}
				
	});

	$(".new").click(function(event) {
		init();
	});
		
	$(".roll").on('click', function(event) {
		dice1 = Math.floor(Math.random() * 6) + 1;
		dice2 = Math.floor(Math.random() * 6) + 1;

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
				
			    newParent= $('.append');

			    var oldOffset = elDiceOne.offset();
			    var newOffset = newParent.offset();		
			    elDiceOne.animate({display: 'block', top: '+=' + newOffset.top, left: '+=' + newOffset.left}, 2000, function(){
			      	
			    });
			    elDiceTwo.animate({display: 'block', top: '+=' + newOffset.top, left: '+=' + newOffset.left}, 2000, function(){
			      	$(".hold").removeAttr('disabled');
				$(".roll").removeAttr('disabled');	
					showMessage();	
			    });



			}
			if(activePlayer == 2) {
				$(".panel-1").slideUp(400);
				$(".panel-2").slideDown(400);
				$(".control-box").addClass('offset-lg-4');
				$(".dice-board").addClass("offset-lg-9");
				newParent= $('.append');

			    var oldOffset = elDiceOne.offset();
			    var newOffset = newParent.offset();		
			    elDiceOne.animate({display: 'block', top: '+=' + newOffset.top, left: '-=' + newOffset.left}, 2000, function(){
			     
			    });
			    elDiceTwo.animate({display: 'block', top: '+=' + (newOffset.top - 205) , left: '-=' + (newOffset.left + 225)}, 2000, function(){
			    	 // elDiceTwo.animate({display: 'block', top: '-=205px', left: '-=225px'}, 2000, function(){
			      
			   		 // });
			      	$(".hold").removeAttr('disabled');
					$(".roll").removeAttr('disabled');	
					showMessage();	
			    });
			}

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
	});

	$(".hold").on('click', function(event) {
		if(gameOn){
			scores[activePlayer-1] += currentScore;
			$(".score" + activePlayer).html(scores[activePlayer-1]);			
			 if (scores[activePlayer-1] >= 100) {
			 	var h1 = $(".modal").find('h1');
			 	$("#dice1").hide();
				$("#dice2").hide();
				$(".modal").find('button').removeClass('asd');
				$(".modal").find('button').addClass('new');
			 	$(".modal").slideDown('400');				
				// $(".modal").find('button').css("display", "block");
			 	h1.html("Player " + activePlayer + " wins ! ! ! !");
			 	$(".modal").find("button").html("Play Again");
			 	gameOn = false;	            
	        } else {
	            nextPlayer();
	        }
	    }
			
	});

	function nextPlayer(){
		currentScore = 0;
		$(".current" + activePlayer).html(0);	
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
		$(".panel-" + activePlayer).slideDown("slow");
		
	}

	function showMessage(){
		$(".roll").removeAttr('disabled');
					if(dice1 == 1 || dice2 == 1){			
				$(".modal").slideDown('400');				
				// $(".modal").find('button').css("display", "block")

				nextPlayer();
			 	$(".modal").find("h1").html("You rolled a One. Player " + activePlayer + " turns.");
			 	$(".modal").find("button").html("Player " + activePlayer + " Roll");
			}else{
				currentScore += dice1 + dice2;
				$(".current" + activePlayer).html(currentScore);
			}
	}

	function init(){
		 scores = [0,0];
		 activePlayer = 1;
		 currentScore = 0;
		 gameOn = true;
		$(".score1").html(0);
		$(".score2").html(0);
		$(".current1").html(0);
		$(".current2").html(0);
		$("#dice1").hide();
					$("#dice2").hide();
		// $(".panel-1").slideUp("slow");
		// $(".panel-2").slideUp("slow");
		// $(".panel-1").slideDown();
		$(".modal").find("h1").html("Setting Up New Game");
		$(".modal").find('button').html("Please Wait .. . . .");
		$(".modal").slideDown(2000, function(){
			$(".control-box").removeClass('offset-lg-4');
			$(".panel-1").slideDown();
		$(".panel-2").slideDown();
		$(".top").hide();
		});
		$(".modal").slideUp(2000,function(){
			$(".control-box").removeClass('offset-lg-4');
			$(".top").show();
		});
		
		$(".dice-box").hide();
		


	}


});






