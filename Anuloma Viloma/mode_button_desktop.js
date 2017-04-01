var mode_button = document.getElementById('mode-button');
var easy_mode_button = document.getElementById('easy_mode');
var hard_mode_button = document.getElementById('hard_mode');

var clicksCounter = 0;
var animationStarted = false;

var animationTime = 500;

mode_button.onclick = function(){ 
	console.log('in');

	if(animationStarted === false){

	if(clicksCounter%2 === 0){

	$(easy_mode_button).animate({
		top: '-=100px',
		left: '-=120px',
	}, animationTime,'swing',
	 function(){
	 	animationStarted = false;
	 	console.log('easy mode button out animation ends')
	 }
	)

	$(hard_mode_button).animate({
				top: '-=100px',
				left: '+=120px',
			}, animationTime,'swing',
			 function(){
			 	console.log('hard mode button out animation ends')
			 }
			)
	}

	else{
		$(easy_mode_button).animate({
			top: '+=100px',
			left: '+=120px',
		}, animationTime,'swing',
		 function(){
		 	animationStarted = false;
		 	console.log('easy mode button in animation ends')
		 }
		)

		$(hard_mode_button).animate({
			top: '+=100px',
			left: '-=120px',
		}, animationTime,'swing',
		 function(){
		 	console.log('hard mode button in animation ends')
		 }
		)	
	}

	clicksCounter++;
}
	animationStarted = true;

};

easy_mode_button.onclick = function(){
	SetEasyMode();
}

hard_mode_button.onclick = function(){
	SetHardMode();
}