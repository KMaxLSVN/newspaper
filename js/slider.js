document.addEventListener("DOMContentLoaded", function(event){
    //SLIDER
    class Slider {
        constructor(content, next, prev, points, tag) {
            this.sliderCounter = 0;
            this.imgArr = [...document.getElementsByClassName(content)];
            this.sliderPoint = document.getElementsByClassName(points)[0];
            this.rightButton = document.getElementsByClassName(next)[0];
            this.leftButton = document.getElementsByClassName(prev)[0];

            this.rightButton.addEventListener("click", ()=>{this.counter(true)});
            this.leftButton.addEventListener("click", ()=>{this.counter(false)});

            this.createElem(tag);
            this.toggleActive(0, [...this.sliderPoint.children]);


        }
        //Method clickPoint
        clickPoint() {
            [...this.sliderPoint.children].forEach((elem)=>{
                elem.addEventListener("click", (event)=>{
                    this.sliderCounter = [...this.sliderPoint.children].indexOf(event.target);
                    this.toggleActive(this.sliderCounter, this.imgArr);
                    this.toggleActive(this.sliderCounter, [...this.sliderPoint.children]);
                })
            })
        }
        //Method createElem
        createElem(tag) {
            let temp = document.createElement(tag);
            for (let i=0; i < this.imgArr.length; i++ ) {
                this.sliderPoint.appendChild(temp.cloneNode(true));
            }
            this.clickPoint();
        }
        //Method toggleActive
        toggleActive(index, array) {
            array.forEach((el)=>{
                el.classList.remove('active')
            });
            array[index].classList.add('active')
        }
        //Method counter
        counter(flag) {
            flag ? this.sliderCounter++ : this.sliderCounter--;
            if (this.sliderCounter >= this.imgArr.length) {
                this.sliderCounter = 0;
            }
            if (this.sliderCounter < 0) {
                this.sliderCounter = this.imgArr.length-1;
            }
            this.toggleActive(this.sliderCounter, this.imgArr);
            this.toggleActive(this.sliderCounter, [...this.sliderPoint.children]);
        }

    }
    new Slider ('slider-content', 'right-button', 'left-button', 'slider-menu','li')

   //  let imgArr = [...document.getElementsByClassName('slider-content')];
	// let sliderCounter = 0;
   //  let rightButton = document.getElementsByClassName('right-button')[0];
   //  let leftButton = document.getElementsByClassName('left-button')[0];
   //
   //  //Slider point
   //  let sliderPoint = document.getElementsByClassName('slider-menu')[0];
   //  let temp = document.createElement('li');
   //
   //  for (let i=0; i < imgArr.length; i++ ) {
   //      sliderPoint.appendChild(temp.cloneNode(true));
   //  }
   //
   //  let li = document.querySelectorAll('.slider-menu>li');
   //  Array.from(li).forEach((elem)=>{
   //      elem.addEventListener("click", (event)=>{
   //          sliderCounter = [...sliderPoint.children].indexOf(event.target);
   //          toggleActive(sliderCounter, imgArr);
   //          toggleActive(sliderCounter, [...sliderPoint.children]);
   //      })
   //  });
   //
   //  let toggleActive = (index, array)=>{
   //      array.forEach((el)=>{
   //          el.classList.remove('active')
   //      });
   //      array[index].classList.add('active')
   //  };
   //  toggleActive(0, [...sliderPoint.children]);
   //
   //  function counterInc() {
   // 		sliderCounter++;
   // 		if (sliderCounter >= imgArr.length) {
   // 			sliderCounter = 0;
   // 		}
   // 		toggleActive(sliderCounter, imgArr);
   // 		toggleActive(sliderCounter, [...sliderPoint.children]);
   //  }
   //
   //  function counterDec() {
   //  	if (!sliderCounter) {
   //  		sliderCounter = imgArr.length-1;
   //  	} else {
   //  		sliderCounter--;
   //  	}
   //      toggleActive(sliderCounter, imgArr);
   //      toggleActive(sliderCounter);
   //  }
   //
   // rightButton.addEventListener("click", counterInc);
   // leftButton.addEventListener("click", counterDec);


});