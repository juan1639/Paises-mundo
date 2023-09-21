// -----------------------------------------------------------
// 	Funciones de utilidad
// -----------------------------------------------------------
export function limpiarElementosPaises(elementoDondeLimpiar) {

	while (elementoDondeLimpiar.firstElementChild != null && elementoDondeLimpiar.firstElementChild != undefined) {
		elementoDondeLimpiar.removeChild(elementoDondeLimpiar.firstElementChild);
	}
}

// -----------------------------------------------------------------
export function capitalize1st(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// -----------------------------------------------------------------
export function capitalize2nd(string) {
	let nuevoString = '';

	for (let i = 0; i < string.length; i ++) {
		let letra = string[i];
		//console.log(letra, '...');

		if (i > 0) {
			if (string[i - 1] === ' ') letra = letra.toUpperCase();
		}

		nuevoString += letra;
	}

	console.log(nuevoString);
	return nuevoString;
}

// ----------------------------------------------------------------
export function ponerPtosPopulation(poblacion) {
	let string = poblacion.toString();
	let nuevoString = '';

	for (let i = 0; i < string.length; i ++) {
		nuevoString += string[i];

		if ((string.length - i - 1) % 3 === 0 && i < string.length - 1) {
			nuevoString += '.';
		}
	}
	
	return nuevoString;
}


