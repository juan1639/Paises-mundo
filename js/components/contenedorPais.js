// -----------------------------------------------------------
// 	Componente <Contenedor Pais>
// -----------------------------------------------------------
import {contenedorInfoPais} from './contenedorInfoPais.js';

import {limpiarElementosPaises} from '../utils.js';

// ======================================================================
export function contenedorPais(banderaUrlSvg, paisNombreComun, infoPais, errorBool) {

	const contenedorPais = document.createElement('div');
	contenedorPais.setAttribute('class', 'mostrar__paises__contenedor');
	respuesta.appendChild(contenedorPais);

	if (errorBool) {

		const tipoBusquedaErronea = document.createElement('h3');
		tipoBusquedaErronea.setAttribute('class', 'msgErrorBusqueda');
		tipoBusquedaErronea.style.fontSize = '32px';
		tipoBusquedaErronea.style.color = '#444';
		tipoBusquedaErronea.innerHTML = 'Busqueda';
		contenedorPais.appendChild(tipoBusquedaErronea);

		const busquedaErronea = document.createElement('h3');
		busquedaErronea.setAttribute('class', 'msgErrorBusqueda');
		busquedaErronea.style.fontSize = '40px';
		busquedaErronea.style.color = 'darkred';
		busquedaErronea.innerHTML = paisNombreComun;
		contenedorPais.appendChild(busquedaErronea);

		const lineaSeparadora = document.createElement('hr');
		lineaSeparadora.style.margin = '0 5px 0 5px';
		contenedorPais.appendChild(lineaSeparadora);

		const msgErrorBusqueda = document.createElement('h3');
		msgErrorBusqueda.setAttribute('class', 'msgErrorBusqueda');
		msgErrorBusqueda.innerHTML = 'No Encontrado';
		contenedorPais.appendChild(msgErrorBusqueda);

	} else {

		const imagenBandera = document.createElement('img');
		imagenBandera.setAttribute('class', 'mostrar__paises__bandera');
		imagenBandera.src = banderaUrlSvg;
		contenedorPais.appendChild(imagenBandera);

		const divInfoPais = document.createElement('div');
		divInfoPais.setAttribute('class', 'div__infoPais');
		contenedorPais.appendChild(divInfoPais);

		const nombrePais = document.createElement('h5');
		nombrePais.innerHTML = paisNombreComun;
		divInfoPais.appendChild(nombrePais);

		const botonVer = document.createElement('button');
		botonVer.setAttribute('class', 'mostrar__paises__botonVerInfo');
		botonVer.innerHTML = 'Ver Info';
		divInfoPais.appendChild(botonVer);

		botonVer.addEventListener('click', () => {

			limpiarElementosPaises(respuesta);
			const contenedorPais = document.createElement('div');
			contenedorPais.setAttribute('class', 'mostrar__paises__contenedor');
			respuesta.appendChild(contenedorPais);
			
			contenedorInfoPais(contenedorPais, infoPais);
		});
	}
}
