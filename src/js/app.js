// MENU-SLIDER
//visible
 const MenuSliderBtns = document.querySelectorAll('.menu-slider-btn');
for (let MenuSliderBtn of MenuSliderBtns) {
    MenuSliderBtn.addEventListener('click', function() {
     this.parentElement.querySelector('.menu-slider-menu').classList.toggle('visible');   
    });
}

//supprimer
window.addEventListener('click', function(e) {
   if (!e.target.matches('.menu-slider-btn')) {
       document.querySelector('.menu-slider-menu').classList.remove('visible');
   } 
});



//SCROLL
const observer = new IntersectionObserver(function(observables) {
   for (let observable of observables) {
       if (observable.isIntersecting) {
        observable.target.classList.add('visibly');  
       }
       else {
           observable.target.classList.remove('visibly');
       }       
   } 
}, {
    threshold: 0.5
});

const ScrollTriggers = document.querySelectorAll('.scroll-trigger');
for (ScrollTrigger of ScrollTriggers) {
 observer.observe(ScrollTrigger);   
}