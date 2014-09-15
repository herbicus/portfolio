
console.log("game.js loaded");

if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function() {};

var gameAPI = (function(options) {
	var shared = {},
		options = options || {}


	var playFooterGame = new TimelineMax({paused: true});

	playFooterGame.to(".game", 0.75, {scale: 1, alpha: 1 });

	$("#footer-game").on("click", function () {
		// TweenMax.to(".game", 0.75, {
	 //  		opacity: 1,
	 //  		scale: 1
		// });

		// REVERSE ANIMATION 
		if ($(this).hasClass("played")) {
			playFooterGame.play();	
		} else {
			playFooterGame.reverse();
		}	
		$(this).toggleClass("played");
	});


	// COMPUTER'S CHOICE
	var computerChoice = Math.random();
	if (computerChoice < 0.34) {
	    computerChoice = "rock";
	} else if(computerChoice <= 0.67) {
	    computerChoice = "paper";
	} else {
	    computerChoice = "scissors";
	}

	var userChoice;


	function cleanUp () {
		document.getElementById("picker").style.display="none";
		document.getElementById("choices").style.display="none";
		document.getElementById("countdown_go").style.display="none";
		userChoice="";

	}

	window.onload = init;



	// function init() {
		

	// 	// cleanUp();
	// 	// console.log("init()");
	// 	// document.getElementById("outcome").style.display="none";


	// 	// setTimeout(displayReady, 1000);
	// 	// setTimeout(displayRock, 4000);
	// 	// setTimeout(displayPaper, 5000);
	// 	// setTimeout(displayScissors, 6000);
	// 	// setTimeout(displayGo, 7000);

	// 	// function displayReady () {
	// 	// 	document.getElementById("countdown_ready").style.display="block";
	// 	// }

	// 	// function displayRock () {
	// 	// 	document.getElementById("countdown_ready").style.display="none";
	// 	// 	document.getElementById("countdown_rock").style.display="block";
	// 	// }

	// 	// function displayPaper () {
	// 	// 	document.getElementById("countdown_rock").style.display="none";
	// 	// 	document.getElementById("countdown_paper").style.display="block";

	// 	// }

	// 	// function displayScissors () {
	// 	// 	document.getElementById("countdown_paper").style.display="none";
	// 	// 	document.getElementById("countdown_scissors").style.display="block";
	// 	// }

	// 	// function displayGo () {
	// 	// 	document.getElementById("countdown_scissors").style.display="none";
	// 	// 	document.getElementById("countdown_go").style.display="block";
	// 	// 	document.getElementById("picker").style.display="block";
			
	// 	// 	document.getElementById("choice_rock").onclick=choseRock;
	// 	// 	function choseRock () {
	// 	// 		userChoice = "rock";
	// 	// 		displayResults();
	// 	// 		displayOutcome();
	// 	// 		user_choice.innerHTML="Rock";
	// 	// 	}
			
	// 	// 	document.getElementById("choice_paper").onclick=chosePaper;
	// 	// 	function chosePaper () {
	// 	// 		userChoice = "paper";
	// 	// 		displayResults();
	// 	// 		displayOutcome();
	// 	// 		user_choice.innerHTML="Paper";

	// 	// 	}
			
	// 	// 	document.getElementById("choice_scissors").onclick=choseScissors;
	// 	// 	function choseScissors () {
	// 	// 		userChoice = "scissors";
	// 	// 		displayResults();
	// 	// 		displayOutcome();
	// 	// 		user_choice.innerHTML="Scissors";
	// 	// 	}

	// 	// 	// TOO SLOW
	// 	// 	setTimeout(tooSlow, 3000);
	// 	// 	function tooSlow () {
	// 	// 		console.log("tooSlow");
	// 	// 		if (!userChoice){
	// 	// 			// if they didn't make a choice	
	// 	// 			document.getElementById("outcome").style.display="block";
	// 	// 			document.getElementById("outcome").innerHTML="Too Slow";
	// 	// 			document.getElementById("picker").style.display="none";
	// 	// 			setTimeout(init, 2000);
	// 	// 		} else {
	// 	// 			// if they did make a choice, do nothing

	// 	// 		}
				
			
	// 	// 	}

	// 	// }


	// }

	function displayResults () {
		document.getElementById("picker").style.display="none";
		document.getElementById("choices").style.display="block";
		// user_choice.innerHTML="Rock";
		computer_choice.innerHTML=computerChoice;

	}

	function displayOutcome () {
		
		document.getElementById("outcome").style.display="block";


		if (userChoice == "rock" && computerChoice == "rock") {
			document.getElementById("outcome").innerHTML="Its a Tie!";
		} else if (userChoice == "rock" && computerChoice == "paper") {
			document.getElementById("outcome").innerHTML="You Lose!";
		} else if (userChoice == "rock"  && computerChoice == "scissors")
			document.getElementById("outcome").innerHTML="You Win!";
		

		if (userChoice == "paper" && computerChoice == "paper") {
			document.getElementById("outcome").innerHTML="Its a Tie!";
		} else if (userChoice == "paper" && computerChoice == "scissors") {
			document.getElementById("outcome").innerHTML="You Lose!";
		} else if (userChoice == "paper"  && computerChoice == "rock")
			document.getElementById("outcome").innerHTML="You Win!";
		

		if (userChoice == "scissors" && computerChoice == "scissors") {
			document.getElementById("outcome").innerHTML="Its a Tie!";
		} else if (userChoice == "scissors" && computerChoice == "rock") {
			document.getElementById("outcome").innerHTML="You Lose!";
		} else if (userChoice == "scissors"  && computerChoice == "paper")
			document.getElementById("outcome").innerHTML="You Win!";

			document.getElementById("picker").style.display="none";

			setTimeout(init, 3000);
		
	}

	
	// BOTTOM BEFORE CLOUSURE
	var init = function() {
		console.log('game API works');
		cleanUp();
		console.log("init()");
		document.getElementById("outcome").style.display="none";


		setTimeout(displayReady, 1000);
		setTimeout(displayRock, 4000);
		setTimeout(displayPaper, 5000);
		setTimeout(displayScissors, 6000);
		setTimeout(displayGo, 7000);

		function displayReady () {
			document.getElementById("countdown_ready").style.display="block";
		}

		function displayRock () {
			document.getElementById("countdown_ready").style.display="none";
			document.getElementById("countdown_rock").style.display="block";
		}

		function displayPaper () {
			document.getElementById("countdown_rock").style.display="none";
			document.getElementById("countdown_paper").style.display="block";

		}

		function displayScissors () {
			document.getElementById("countdown_paper").style.display="none";
			document.getElementById("countdown_scissors").style.display="block";
		}

		function displayGo () {
			document.getElementById("countdown_scissors").style.display="none";
			document.getElementById("countdown_go").style.display="block";
			document.getElementById("picker").style.display="block";
			
			document.getElementById("choice_rock").onclick=choseRock;
			function choseRock () {
				userChoice = "rock";
				displayResults();
				displayOutcome();
				user_choice.innerHTML="Rock";
			}
			
			document.getElementById("choice_paper").onclick=chosePaper;
			function chosePaper () {
				userChoice = "paper";
				displayResults();
				displayOutcome();
				user_choice.innerHTML="Paper";

			}
			
			document.getElementById("choice_scissors").onclick=choseScissors;
			function choseScissors () {
				userChoice = "scissors";
				displayResults();
				displayOutcome();
				user_choice.innerHTML="Scissors";
			}

			// TOO SLOW
			setTimeout(tooSlow, 3000);
			function tooSlow () {
				console.log("tooSlow");
				if (!userChoice){
					// if they didn't make a choice	
					document.getElementById("outcome").style.display="block";
					document.getElementById("outcome").innerHTML="Too Slow";
					document.getElementById("picker").style.display="none";
					setTimeout(init, 2000);
				} else {
					// if they did make a choice, do nothing

				}
				
			
			}

		}
	};
	shared.init = init;

	return shared;
}());

$(document).ready(function() {
	gameAPI.init();

});














