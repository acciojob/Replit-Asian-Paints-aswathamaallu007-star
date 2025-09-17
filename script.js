//your JS code here. If required.
const forms = document.getElementById('forms')
const boxes = document.querySelectorAll('.grid-items')
forms.addEventListener('submit',applycolor)
function applycolor(e){
	e.preventDefault()
	const inputbox = e.target[0].value
	const color = e.target[1].value;
	if(parseInt(inputbox)>0 && parseInt(inputbox) < 10){
		e.target.reset()
	resetcolor()
	const targetbox = document.getElementById(inputbox)
	targetbox.style.backgroundColor = color;}
	else{
		alert('enter valid number')
	}
}
function resetcolor(){
	for(box of boxes){
		box.style.backgroundColor = 'transparent'
	}
}