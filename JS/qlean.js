

var texts = ['Кухня и коридор', '1-комнатная', '2-комнатная', '3-комнатная', '4-комнатная'];
var elem = document.querySelector('#elem');
var prev = document.querySelector('#prev');
var next = document.querySelector('#next');


$('.all-mesangeres').on('click', () => {
	$('.all-mesangeres').toggleClass('move');
	$('.adaptiv-cont').toggleClass('flexMenu');
}) 


var r = 0;
elem.innerHTML = texts[0];
next.addEventListener ('click', function() {
	r++;
	elem.innerHTML = texts[r];
	if (r == texts.length) {
		r = texts.length-1;
	}
	elem.innerHTML = texts[r];
});
prev.addEventListener ('click', function() {
	r--;
	if (r == -1) {
		r = 0;
	}
	elem.innerHTML = texts[r];
});

var yzel = ['1 санузел', '2 санузел', '3 санузел', '4 санузел', '5 caнузел', '6 caнузел'];
var item = document.querySelector('#item');
var left = document.querySelector('#left');
var right = document.querySelector('#right');

var q = 0

item.innerHTML = yzel[0];
left.addEventListener('click', function() {
	q--;
	item.innerHTML = yzel[i];
	if (q == -1) {
		q = 0;
	}
	item.innerHTML = yzel[q];
});
right.addEventListener('click', function() {
	q++;
	item.innerHTML = yzel[q];
	if (q == yzel.length) {
		q = yzel.length -1;
	}
	item.innerHTML = yzel[q];
});

function prov() {
	var numb = document.querySelector('#numb').value;
	var numbar = numb;
	if (numbar[0] != 9,numbar[1] != 9,numbar[2] != 9) {
		alert('qwerty');
	};
};

let slides = document.getElementsByClassName('slides-item'),
	dots = document.getElementsByClassName('dots-item'),
	dotsArea = document.querySelector('.dots-block'),
	prevBtn = document.querySelector('#left-button'),
	nextBtn = document.querySelector('#right-button'),
	slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
	if(n < 1) {
		slideIndex = slides.length;
	} else if (n > slides.length){
		slideIndex = 1
		} 
	for(let i=0; i < slides.length;i++) {
		slides[i].style.display = "none";
	}
	for(let i=0; i < dots.length;i++) {
		dots[i].classList.remove("active");
	}
	slides[slideIndex - 1].style.display='block';
	dots[slideIndex - 1].classList.add("active");	
}
function nextSlides(n) {
	showSlides(slideIndex += n);
}

var acarArray = document.getElementsByClassName('acardion');
var arrowArray = document.getElementsByClassName('arrow');

	for(var i=0;i<acarArray.length;i++){
	acarArray[i].onclick = function () {
		for(i=0;i<acarArray.length;i++) {
			acarArray[i].classList.remove('acar-active');
		}
		for(i=0;i<arrowArray.length;i++) {
			arrowArray[i].classList.remove('arrow-active');
		}
		this.classList.add('acar-active');
		$(this).find('.arrow').toggleClass('arrow-active');
	}
}




