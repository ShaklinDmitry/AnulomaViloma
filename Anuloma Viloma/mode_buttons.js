var easy_mode_button = document.getElementById('easy_mode_button');
var hard_mode_button = document.getElementById('hard_mode_button');

var currentMode;

easy_mode_button.onclick = function(){
	currentMode = 'easy';
}

hard_mode_button.onclick = function(){
	currentMode = 'hard';
}