var easy_mode_button = document.getElementById('easy');
var hard_mode_button = document.getElementById('hard');

var currentMode;

easy_mode_button.onclick = function(){
	currentMode = 'easy';
}

hard_mode_button.onclick = function(){
	currentMode = 'hard';
}