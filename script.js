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

document.addEventListener('click', function(event){
   const element = event.target
   if(element.classList.contains('link')){
      toggleMenu()
   }
})