var inhale = 4;
var exhale = 4;
var delay = 1;

var secondsCounter = 0;
var phaseCounter = 0;

var inhaleLabel = 'ВДОХ';
var delayLabel = 'ЗАДЕРЖКА'
var exhaleLabel = 'ВЫДОХ';

//так как в setInterval есть задержка при первом запуске, то сначла запущу вручную
timer();
// Update the count down every 1 second
var x = setInterval(timer, 1000);


function timer(){
	document.getElementById("time").innerHTML = secondsCounter;

   	if(secondsCounter === 0){

   	switch(phaseCounter){
   		case 0: 
   			document.getElementById("action").innerHTML = inhaleLabel;
   			break;
   		case 1: 
   			document.getElementById("action").innerHTML = delayLabel;
   			break;
   		case 2: 
   			document.getElementById("action").innerHTML = exhaleLabel;
   			break;
   	}
   }

	if(secondsCounter === inhale && phaseCounter === 0){
		phaseCounter++;
		secondsCounter = -1;

		if(delay === 0){
			phaseCounter++;
		}
	}

	if(secondsCounter === delay && phaseCounter === 1){
		phaseCounter++;
		secondsCounter = -1;
	}

	if(secondsCounter === exhale && phaseCounter === 2){
		phaseCounter = 0;
		secondsCounter = -1;
	}

 	secondsCounter++;

 //   clearInterval(x);
}