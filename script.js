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
   var menuToggle = document.querySelector('.toggle');
   var navegation = document.querySelector('.navegation')

   menuToggle.classList.remove('active')
   navegation.classList.remove('active')
}

function toggleDropdown(dropdown){
   dropdown.classList.toggle('active')
}

const headerLinks = document.querySelectorAll('.link')
headerLinks.forEach((link) => {
   link.addEventListener('click', function(event){
      const windowWidth = window.innerWidth
      const isMobile = windowWidth <= 991

      const element = event.target
      const liContainer = element.parentElement
      const dropdown = liContainer.querySelector('.drop-ul')

      if(dropdown){
         toggleDropdown(dropdown)
      } else{
         isMobile ? toggleMenu(): closeMenu()
      }
   })
})