var intro_page = document.getElementById('intro_page');
var intro_button = document.getElementById('intro_button');

var tutorial_page = document.getElementById('tutorial_page');
var tutorial_button = document.getElementById('tutorial_button');

var mode_page = document.getElementById('mode_page');
var easy_mode_button = document.getElementById('easy_mode_button');
var hard_mode_button = document.getElementById('hard_mode_button');

var pranayama_main_page = document.getElementById('pranayama_main_page');

initPages();

function initPages(){
	intro_page.style.display = 'block';
	tutorial_page.style.display = 'none';
	mode_page.style.display = 'none';
	pranayama_main_page.style.display = 'none';
}

intro_button.onclick = function(){
	intro_page.style.display = 'none';
	tutorial_page.style.display = 'block';
}

tutorial_button.onclick = function(){
	tutorial_page.style.display = 'none';
	mode_page.style.display = 'block';
}

easy_mode_button.onclick = function(){
	mode_page.style.display = 'none';
	pranayama_main_page.style.display = 'block';

	easy_mode_button_time_set();
}

hard_mode_button.onclick = function(){
	mode_page.style.display = 'none';
	pranayama_main_page.style.display = 'block';

	hard_mode_button_time_set();
}