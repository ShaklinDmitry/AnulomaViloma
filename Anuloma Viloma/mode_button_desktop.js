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

/*	$(mode_button).animate({
		scale:'1.1'
	},animationTime)	
*/
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

	/*	$(mode_button).animate({
				scale:'1'
			},animationTime)	
*/
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

mode_button.onmouseout = function(){
	 console.log('out');
}