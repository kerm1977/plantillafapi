var boton= document.getElementById('boton');
var input= document.getElementById('password');

boton.addEventListener('click', mostrarContraseña);

function mostrarContraseña(){
	if(input.type == "password"){
		input.type = "text";
		setTimeout("ocultar()", 2000);
	}else{
		input.type = "password";
	}
}


var boton= document.getElementById('boton');
var input1= document.getElementById('confirm_password');

boton.addEventListener('click', mostrarConfirm);

function mostrarConfirm(){
	if(input1.type == "confirm_password"){
		input1.type = "text";
		setTimeout("ocultar()", 2000);
	}else{
		input1.type = "confirm_password";
	}
}

function ocultar(){
	input.type = "password";
	input1.type = "password";
}



