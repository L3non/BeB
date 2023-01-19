function imgSlider(anything){
   document.querySelector('.beb').src = anything;
}

function changeCircleColor(color){
   const circle = document.querySelector('.circle');
   circle.style.background = color;
}

function toggleMenu(){
   const windowWidth = window.innerWidth
   const isMobile = windowWidth <= 991
   var menuToggle = document.querySelector('.toggle');
   var navegation = document.querySelector('.navegation')
   
   menuToggle.classList.toggle('active')

   if(isMobile){
   navegation.classList.toggle('active')
   }
}

document.addEventListener('click', function(event){
   const element = event.target
   if(element.classList.contains('link')){
      toggleMenu()
   }
})