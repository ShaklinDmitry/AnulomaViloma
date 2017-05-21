var intro_page = document.getElementById('intro_page');
var intro_button = document.getElementById('intro_button');

var tutorial_page = document.getElementById('tutorial_page');
var tutorial_button = document.getElementById('tutorial_button');

var mode_page = document.getElementById('mode_page');
var easy_mode_button = document.getElementById('easy_mode_button');
var hard_mode_button = document.getElementById('hard_mode_button');

var pranayama_main_page = document.getElementById('pranayama_main_page');

var pages = [];
pages.push(intro_page);
pages.push(tutorial_page);
pages.push(mode_page);
pages.push(pranayama_main_page);

var currentPage = 0;
var back_buttons = document.getElementsByClassName('back_button');

initPages();

function initPages(){
	pages[0].style.display = 'block';
	pages[1].style.display = 'none';
	pages[2].style.display = 'none';
	pages[3].style.display = 'none';

	currentPage = 0;
}

intro_button.onclick = function(){
	pages[0].style.display = 'none';
	pages[1].style.display = 'block';

	currentPage = 1;
}

tutorial_button.onclick = function(){
	pages[1].style.display = 'none';
	pages[2].style.display = 'block';

	currentPage = 2;
}

easy_mode_button.onclick = function(){
	pages[2].style.display = 'none';
	pages[3].style.display = 'block';

	currentPage = 3;

	easy_mode_button_time_set();
}

hard_mode_button.onclick = function(){
	pages[2].style.display = 'none';
	pages[3].style.display = 'block';

	currentPage = 3;

	hard_mode_button_time_set();
}


for(var i=0; i < back_buttons.length; i++){
		back_buttons[i].onclick = function(){
			currentPage--;

			pages[currentPage].style.display = 'block';
			pages[currentPage + 1].style.display = 'none';

			ResetPranayamaButton();
	}
}

