// ----------------------------------------------------------------
// 		API - RestCountries 
// 
// ----------------------------------------------------------------
import { 
	url, 
	busqueda, 
	respuesta, 
	envio, 
	selecContinente, 
	filtroContinente,
	urlImg 
} from './constants.js';

import {
	limpiarElementosPaises 
} from './utils.js';

import {
	mostrarResultados_click, 
	mostrarResultados_change 
} from './mostrarResultados.js';

// ===============================================================
const hacerFetchAPI = async (event) => {
	const endpoint = url;
	const buscaPais = busqueda.value;
	const tipoEvento = event.type;
	console.log(tipoEvento, buscaPais);

	limpiarElementosPaises(respuesta);

	try {
		const response = await fetch(endpoint);
		console.log(response);

		if (response.ok) {
			const jsonResponse = await response.json();
			mostrarResultados(jsonResponse, buscaPais, event);
		}

	} catch (error) {console.log(error);}
}

// ===============================================================
const mostrarResultados = (jsonResponse, buscaPais, event) => {
	
	const allCountries = jsonResponse;
	console.log(allCountries);

	if (event.type === 'click' || event.type === 'keydown') {
		mostrarResultados_click(allCountries, buscaPais, event);
		
	} else if (event.type === 'change') {
		mostrarResultados_change(allCountries, buscaPais, event);

	} else {
		return
	}
}

// ================================================================
// 	EVENTOS
// ----------------------------------------------------------------
document.addEventListener('click', (event) => {
	console.log(event, event.target.id);

	if (event.target.id === 'boton__buscaPaises' || event.target.id === 'img__lupa') {
		hacerFetchAPI(event);
	}
});

document.addEventListener('change', (event) => {
	console.log(event, event.target.id);

	if (event.target.id === 'seleccion__continente') hacerFetchAPI(event);
});

document.addEventListener('keydown', (event) => {
	console.log(event);

	if (event.key === 'Enter') hacerFetchAPI(event);
});

