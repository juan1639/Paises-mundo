// -----------------------------------------------------------
// 	Funciones MOSTRAR Resultados (Click / Change)
// -----------------------------------------------------------
import {
	filtroContinente,
	selecContinente } from './constants.js';

import {
	capitalize1st, 
	capitalize2nd } from './utils.js';

import {
	contenedorPais } from './components/contenedorPais.js';

// ========================================================================
export function mostrarResultados_click(allCountries, buscaPais, event) {

	console.log('busqueda click...');
	let textoBusqueda;

	if (buscaPais.replace(' ', '') === buscaPais) {
		textoBusqueda = capitalize1st(buscaPais.toLowerCase());

	} else {
		const primeraCapitalize = capitalize1st(buscaPais.toLowerCase());
		textoBusqueda = capitalize2nd(primeraCapitalize);
	}
	
	let busqueda = allCountries.filter((pais, index) => {

		if (pais['name']['common'] != undefined) {
			return pais['name']['common'] === textoBusqueda;
		}
	});

	if (busqueda.length === 0) {
		busqueda = allCountries.filter((pais, index) => {

			if (pais['capital'] != undefined) {
				return pais['capital'][0] === textoBusqueda;
			}
		});
	}

	if (busqueda.length === 0) {
		busqueda = allCountries.filter((pais, index) => {

			if (pais['languages'] != undefined) {
				return Object.values(pais['languages']).includes(textoBusqueda);
			}
		});
	}

	console.log(busqueda, typeof busqueda, '...');

	if (busqueda.length > 0) {
		busqueda.forEach(pais => {
			const banderaUrlSvg = pais['flags']['svg']; 
			const nombrePais = pais['name']['common'];

			contenedorPais(banderaUrlSvg, nombrePais, pais, false);
		});

	} else {
			contenedorPais('error busqueda', textoBusqueda, 'Error', true);
	}
}

// ========================================================================
export function mostrarResultados_change(allCountries, buscaPais, event) {

	const selectedIndex = event.target.options.selectedIndex;
	console.log('busqueda change...', selectedIndex);

	const continenteElegido = filtroContinente[selectedIndex];

	const busqueda = allCountries.filter((pais, index) => {
		if (pais.continents.length === 1 && continenteElegido != 'All') {
			return pais.continents[0] === continenteElegido;

		} else if (pais.continents.length > 1 && continenteElegido != 'All') {
			return pais.continents.includes(continenteElegido);

		} else if (continenteElegido === 'All') {
			return pais;
		}			
	});

	console.log(busqueda, busqueda.length);

	busqueda.forEach(pais => {
		const banderaUrlSvg = pais['flags']['svg']; 
		const textoBusqueda = pais['name']['common'];

		contenedorPais(banderaUrlSvg, textoBusqueda, pais, false);
	});
}

