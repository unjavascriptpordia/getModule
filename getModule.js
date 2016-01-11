//Espacio de nombres global de nuestra
//biblioteca (object{})
var unJsPorDia=(function(window,undefined){
	//Metodo isNumber (Valida un numero),
	//y necesita de un argumento n
	function isNumber(n){
  	//Haciendo uso del operador ternario de javascript
		//se retorna true si n es numero (No es NaN y es Finito)
		//y false en caso de no ser un numero.
		return (!isNaN(parseFloat(n))&&isFinite(n))?true:false;
	}
	//Función getModule, retorna el modulo de
	//dos numeros.
	//Aunque javascript tiene el
	//operador modulo (%) no es funcional para
	//números negativos, por eso la existencia de
	//esta función.
	function getModule(a,b){
  	//Verifica si a y b son numeros
  	if(isNumber(a)&&isNumber(b)){
    	//Retorna el valor de a%b
    	return (a-Math.floor(a/b)*b);	
    }
    //Si no son numeros retorna null y muestra un alert
    else{
    	alert("Los datos proporcionados no son correctos");
    	return null;
    }
	}
	//API publica de nuestra
	//Biblioteca (Object{})
	//============================
	//Es decir, que lo que se retorne
	//es lo unico a lo que se podra
	//acceder desde fuera usando
	//nuestro namespace global
	//como por ejemplo:
		//unJsPorDia.propiedad o
		//unJsPorDia.metodo
  return{
  	"getModule":function(a,b){return getModule(a,b);}
  };
})(window);
//Registramos el evento load para el objeto window
//en otras palabras, nos aseguramos que antes de ejecutar
//cualquier otra instrucción, la pagina web cargue completamente.
//window.addEventListener("load",function(){
	//Guardamos una referencia al Objeto del DOM 
	//que tenga como ID el valor getModule.
	var getModule=document.getElementById('getModule');
  //Registramos el evento click al objeto getModule
	//es decir, que cuando se haga click en el elemento
	//con ID igual a getModule se ejecutara la función callback
  getModule.addEventListener("click",function(){//Función callback
  	//Guardamos en numberA el valor que se escribio en
		//el input con id igual a numberA
  	var numberA=document.getElementById('numberA').value;
    //Guardamos en numberB el valor que se escribió en
		//el input con id igual a numberB
  	var numberB=document.getElementById('numberB').value;
    //Guardamos una referencia al Objeto del DOM 
		//que tenga como ID el valor module.
		var module=document.getElementById('module');
    //Cambiamos el valor de el input con ID igual a
    //module por el valor que retorna la función getModule
    //de nuestra biblioteca unJsPorDia.
    module.value=unJsPorDia.getModule(numberA,numberB);
  });
//});
