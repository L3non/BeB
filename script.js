function imgSlider(anything){
   document.querySelector('.beb').src = anything;
}

function changeCircleColor(color){
   const circle = document.querySelector('.circle');
   circle.style.background = color;
}

function toggleMenu(){
   var menuToggle = document.querySelector('.toggle');
   var navegation = document.querySelector('.navegation')
   
   menuToggle.classList.toggle('active')
   navegation.classList.toggle('active')
}

function closeMenu(){
   menuToggle.classList.remove('active')
   navegation.classList.remove('active')
}

document.addEventListener('click', function(event){
   const windowWidth = window.innerWidth
   const isMobile = windowWidth <= 991
   const element = event.target
   if(element.classList.contains('link')){
      isMobile ? toggleMenu(): closeMenu()
   }
})