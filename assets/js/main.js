console.log("main.js loaded");

if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function() {};

var cornerstoneAPI = (function(options) {
	var shared = {},
		options = options || {}

	// MOBILE NAV TOGGLE

	var mobileNavAnimation = new TimelineMax({paused: true});

	mobileNavAnimation.from(".mobile-nav-menu", 0.75, {top: -475, alpha: 0});
	
	$(".mobile-nav-icon").on("click", function() {

		// REVERSE ANIMATION 
		if ($(this).hasClass("played")) {
			mobileNavAnimation.play();	
		} else {
			mobileNavAnimation.reverse();
		}	
		$(this).toggleClass("played");
	});


	// MAKES WHOLE DIV INTO LINK
	$(".icon-link").click(function(){
	     window.location=$(this).find("a").attr("href"); 
	     return false;
	});

	$('.l-web').waypoint(function() {
	  	TweenMax.to(".social-widget", 0.75, {
	  		opacity: "1",
			marginTop: 0,
			left: "87%"
			// ease: Bounce.easeOut
		});

	}, { offset: "95%" });
	
	
	// TWEEN MAX ANIMATION TIMELINES

	// --------------------------------------------
	//   Large 3 ICON PINWHEEL ANIMATED BUTTON
	// --------------------------------------------
	var pinLargeAnimationLeft = new TimelineMax({paused: true});
	var pinLargeAnimationRight = new TimelineMax({paused: true});

	pinLargeAnimationLeft.from("#pin-lrg-left-bottom", 0.75, {scale: 0, top: -100, left: 400, alpha: 0, ease: Bounce.easeOut});
	pinLargeAnimationLeft.from("#pin-lrg-left-left", 0.75, {scale: 0, top: -100, left: 200, alpha: 0, ease: Bounce.easeOut}, "-=0.25");
	pinLargeAnimationLeft.from("#pin-lrg-left-right", 0.75, {scale: 0, top: -100, left: 200, alpha: 0, ease: Bounce.easeOut}, "-=0.25");

	pinLargeAnimationRight.from("#pin-lrg-right-bottom", 0.75, {scale: 0, top: -100, left: 400, alpha: 0, ease: Bounce.easeOut});
	pinLargeAnimationRight.from("#pin-lrg-right-left", 0.75, {scale: 0, top: -100, left: 200, alpha: 0, ease: Bounce.easeOut}, "-=0.25");
	pinLargeAnimationRight.from("#pin-lrg-right-right", 0.75, {scale: 0, top: -100, left: 200, alpha: 0, ease: Bounce.easeOut}, "-=0.25");


	// EVENT HANDLER
	$("#pinwheel-lrg-btn-left").on("click", function() {
		console.log(pinLargeAnimationLeft);

		// REVERSE ANIMATION 
		if ($(this).hasClass("played")) {
			pinLargeAnimationLeft.play();	
		} else {
			pinLargeAnimationLeft.reverse();
		}	
		$(this).toggleClass("played");
	});

	$("#pinwheel-lrg-btn-right").on("click", function() {
		console.log(pinLargeAnimationRight);

		// REVERSE ANIMATION 
		if ($(this).hasClass("played")) {
			pinLargeAnimationRight.play();	
		} else {
			pinLargeAnimationRight.reverse();
		}	
		$(this).toggleClass("played");
	});

	$('.l-pinwheel-large').waypoint(function() {
	  	pinLargeAnimationRight.play();
	  	pinLargeAnimationLeft.play();

	}, { offset: "25%" });

	// --------------------------------------------
	//   Large 3 ICON PINWHEEL END
	// --------------------------------------------

	// --------------------------------------------
	//   Large 4 ICON PINWHEEL ANIMATED BUTTON
	// --------------------------------------------
	var pinFourLargeAnimation = new TimelineMax({paused: true});

	pinFourLargeAnimation.from("#pin-lrg-four-left", 0.75, {top: 125, alpha: 0});
	pinFourLargeAnimation.from("#pin-lrg-four-left-middle", 0.75, {top: -75, alpha: 0}, "#pin-lrg-four-left");
	pinFourLargeAnimation.from("#pin-lrg-four-right-middle", 0.75, {top: -270, alpha: 0}, "#pin-lrg-four-left-middle");
	pinFourLargeAnimation.from("#pin-lrg-four-right", 0.75, {top: -470, alpha: 0}, "#pin-lrg-four-right-middle");


	// WAYPOINTS
	$('.l-display-hero').waypoint(function() {
	  	pinFourLargeAnimation.play();

	}, { offset: "80%" });

	// --------------------------------------------
	//   Large 4 ICON PINWHEEL END
	// --------------------------------------------

	
	// SCROLL TO
	$(".l-web-scroll").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".l-web").offset().top
	    }, 2000);
	});

	$(".l-game-scroll").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".l-game-dev").offset().top
	    }, 2000);
	});

	$("#top-button").on("click", function(){
		$('html, body').animate({
		    scrollTop: $(".top-section-navigation").offset().top
		}, 2000);
	});

	


	// FOOTER GAME BUTTON
	var playFooterGame = new TimelineMax({paused: true});

		playFooterGame.to(".game", 0.75, {scale: 1, alpha: 1 });

		$("#footer-game").on("click", function () {

			// REVERSE ANIMATION 
			if ($(this).hasClass("played")) {
				playFooterGame.play();	
			} else {
				playFooterGame.reverse();
			}	
			$(this).toggleClass("played");
		});


		// FOOTER GAME SCRIPT
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

		
		// BOTTOM BEFORE CLOUSURE INIT 
		
		var init = function() {

			// SKILLS RANDOM ANIMATION ENTRY

			// var skills = $(".skill-icon").get();

			// function shuffle(o){ 
			//     for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
			//     return o;
			// }

			// skills = shuffle(skills);

			// $('.l-skills-section').waypoint(function() {
			//   	TweenMax.staggerFrom(skills, 1, {
  	// 				scale: 0,
  	// 				ease: Back.easeOut
  	// 			}, 0.05);

			// }, { offset: "95%" });

			// END SKILLS

			cleanUp();
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
	cornerstoneAPI.init();

});
