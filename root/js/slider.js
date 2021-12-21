window.addEventListener('load', function (){
    const slideSize = this.document.querySelector('.slider-item').offsetWidth;
    const slideItems = this.document.querySelectorAll('.slider-item');
    const slideLength = slideItems.length;
    const slideNext = this.document.querySelector('.slider-next');
    const slidePrev = this.document.querySelector('.slider-prev');
    const slideMain = this.document.querySelector('.slider-main');
    const slideDot = this.document.querySelectorAll('.slider-dots');
    const slideDotItems = this.document.querySelectorAll('.slider-dot-item');
    const slidePlay = this.document.querySelectorAll('.slide-play');
    let index = 1;
    let positionX=0;
    let b = setInterval(() => {
        slideNext.click();
    }, 4000);
    const slideTitle = this.document.querySelectorAll('.img-title');

    [...slidePlay].forEach(et => et.addEventListener('mouseover', () => {
        clearInterval(b);
    }));

[...slidePlay].forEach(et => et.addEventListener('mouseleave', () => {
    b = setInterval(() => {
        slideNext.click();
    }, 4000);
}))

slideNext.addEventListener('click', () => {
    changSlide(1);
    clearInterval(b);
    b = setInterval(() => {
        slideNext.click();
    }, 4000);
});

slidePrev.addEventListener('click', () => {
    changSlide(-1);
    clearInterval(b);
    b = setInterval(() => {
        slideNext.click();
    }, 4000);
});

[...slideDotItems].forEach(item => item.addEventListener('click', function(e){
    clearInterval(b);
    b = setInterval(() => {
        slideNext.click();
    }, 4000);
    [...slideDotItems].forEach(el => el.classList.remove('active'));
    e.target.classList.add("active");
    const dotIndex= parseInt(e.target.dataset.index);
    index = dotIndex;
    positionX = -1 * index * slideSize;
    slideMain.style = `transform: translateX(${positionX}px)`; 
    index++;
}));

function changSlide(dir) {
    if (dir == 1){
        index++; 
        if (index>4) {
            slideMain.style = `transform: translateX(0px)`; //het slide thi quay lai trang dau
            index=1; //reset index
            positionX=0; //reset position
        }
        else{
            positionX = positionX - slideSize; //dich slide sang trai ()
            slideMain.style = `transform: translateX(${positionX}px)`; 
        }
    }
    else{
        index --;
        if (index<1) {
            let i = -slideSize*slideLength+ slideSize;
            positionX = i;
            slideMain.style = `transform: translateX(${positionX}px)`;
            index=4;
        }
        else{
            positionX = positionX + slideSize;
            slideMain.style = `transform: translateX(${positionX}px)`;
        }
    }
    [...slideDotItems].forEach(el => el.classList.remove('active'));
    slideDotItems[`${index-1}`].classList.add('active');
}
});