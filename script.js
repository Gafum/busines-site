new Rellax('.rellax');

AOS.init({
  // Global settings:
  disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  offset: 100, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
});

let numserOfRadio = 0

const slider = () => {
	numserOfRadio>2?numserOfRadio=1:numserOfRadio++
	document.querySelector(`#r${numserOfRadio}`).checked=true
}

function stopinerval(){
	clearInterval(sliddSeter)
}

const sliddSeter = setInterval(slider, 5000)

const navbtn = document.querySelector('#open-nav')
const nav = document.querySelector('nav')
const links = document.querySelectorAll('.navigation-a')

navbtn.onclick=()=> showNvigation()
document.addEventListener('keydown', function(event) {
  if (event.code == 'Escape' && navbtn.classList.contains('chainge-position')) {
		showNvigation()
  }
})

for (i of links){
	i.addEventListener('click', function(){
		if (navbtn.classList.contains('chainge-position')) {
		showNvigation()
  }})
}

function showNvigation(){
	navbtn.classList.toggle('chainge-position')
	nav.classList.toggle('show-nav')
	document.querySelector('body').classList.toggle('no-scrool')
}