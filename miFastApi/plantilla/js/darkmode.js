const btnSwitch = document.querySelector('#btnswitch');

btnSwitch.addEventListener('click', () => {

	// cambia una clase el body
	document.body.classList.toggle('dark');
	// btnSwitch.classList.toggle('active');
})