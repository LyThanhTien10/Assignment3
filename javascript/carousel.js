const container = document.querySelector('.container');
const carousel = document.querySelector('.carousel');
const slider = document.querySelector('.slider');
var item = getComputedStyle(document.documentElement).getPropertyValue('--item');
var carousel_width = getComputedStyle(document.documentElement).getPropertyValue('--carousel_width');


item = slider.childElementCount;
slider.style.width = `${item*100}%`;
for (var i=0;i<item;i++){
    slider.children[i].style.flexBasis = `${100/item}%`;
}

setInterval(()=>{
    direction = -1;
    carousel.style.justifyContent = 'flex-start';
    slider.style.transform = `translate(${-100/item}%)`;  
},5000);

slider.addEventListener('transitionend', function() {
    // get the last element and append it to the front

    if (direction === 1) {
        slider.prepend(slider.lastElementChild);
    } else {
        slider.appendChild(slider.firstElementChild);
    }

    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';
    setTimeout(() => {
        slider.style.transition = 'all 0.5s';
    })
}, false);

window.addEventListener('load',()=>{
    let x = window.innerWidth;
    if(x<953){
        carousel_width = 100;
        container.style.width = `${carousel_width}%`;
    }
    else{
        carousel_width = 75;
        container.style.width = `${carousel_width}%`;
    }
});

window.addEventListener('resize',()=>{
    let x = window.innerWidth;
    if(x<953){
        carousel_width = 100;
        container.style.width = `${carousel_width}%`;
    }
    else{
        carousel_width = 75;
        container.style.width = `${carousel_width}%`;
    }
});