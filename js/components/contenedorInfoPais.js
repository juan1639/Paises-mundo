// -----------------------------------------------------------
// 	Componente <Contenedor Info Pais>
// -----------------------------------------------------------
import {limpiarElementosPaises, ponerPtosPopulation} from '../utils.js';

import {selecContinente} from '../constants.js';

// ===========================================================
export function contenedorInfoPais(contenedorPais, infoPais) {
	console.log('info del pais...');

	//limpiarElementosPaises(contenedorPais);
	selecContinente.selectedIndex = 0;

	contenedorPais.style.width = '100vw';
	contenedorPais.style.height = '100vh';

	const divInfoPais = document.createElement('div');
	divInfoPais.setAttribute('class', 'div__infoPais-detallada');
	contenedorPais.appendChild(divInfoPais);

	const nroCampos = 5;

	const idiomasPais = Object.values(infoPais.languages);
	const poblacion = ponerPtosPopulation(infoPais.population);

	const arrayCampos = [
		['Nombre común: ', infoPais.name.common],
		['Capital:', infoPais.capital],
		['Nombre oficial:', infoPais.name.official],
		['Población: ', poblacion],
		['Idiomas:', idiomasPais]
	];

	for (let i = 0; i < nroCampos; i ++) {

		let columna1 = document.createElement('span');
		columna1.setAttribute('class', 'info_detallada');
		columna1.innerHTML = arrayCampos[i][0];
		divInfoPais.appendChild(columna1);

		let columna2 = document.createElement('strong');
		columna2.setAttribute('class', 'info_detallada');
		columna2.style.color = 'royalblue';
		columna2.innerHTML = arrayCampos[i][1];
		divInfoPais.appendChild(columna2);

		if (i === 0) {
			let columna3 = document.createElement('img');
			columna3.setAttribute('class', 'info__detallada__bandera');
			columna3.src = infoPais.flags.svg;
			divInfoPais.appendChild(columna3);
		} else {
			let columna3 = document.createElement('span');
			columna3.setAttribute('class', 'info_detallada');
			divInfoPais.appendChild(columna3);
		}
	}

	//mostrarGoogleMaps(contenedorPais, infoPais);
}

function mostrarGoogleMaps(contenedorPais, infoPais) {
	const divInfoPais = document.createElement('iframe');
	divInfoPais.setAttribute('class', 'div__infoPais-detallada');
	divInfoPais.src = infoPais.maps.openStreetMaps;
	contenedorPais.appendChild(divInfoPais);
}

