document.addEventListener("DOMContentLoaded", function(event){

    let imgArr = [
    	'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.jpg',
        'img/6.jpg',
        'img/7.jpg',
        'img/8.jpg',
        'img/9.jpg',
        'img/10.jpg',
    ];
	let sliderCounter = 1;
    let slider = document.getElementsByClassName('slider-wrapper')[0];
    let imgSlider = document.getElementsByClassName('slaider-content')[0];

    let rightButton = document.getElementsByClassName('right-button')[0];
    let leftButton = document.getElementsByClassName('left-button')[0];


    function counterInc() {
   		// console.log(imgArr[sliderCounter]);
   		imgSlider.src = imgArr[sliderCounter];
   		sliderCounter++;
   		if (sliderCounter >= imgArr.length) {
   			sliderCounter = 0;
   		}
    }

    function counterDec() {
    	if (slideCounter == 0) {
    		slideCounter = imgArr.length-1;
    	} else {
    		sliderCounter--;
    	}
    	imgSlider.src = imgArr[sliderCounter];
    }


   rightButton.addEventListener("click", counterInc);
   leftButton.addEventListener("click", counterDec);

 









});