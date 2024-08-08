/**
 * 
 * @param {String} card 
 * @returns {HTMLImageElement} imagen de retorno
 */

export const crearCartaHTML=(card)=>{

if(!card) throw new Error('La carta es un argumento obligatorio');
 // <img class="carta" src="assets/cartas/2C.png">
 const imgCarta = document.createElement('img');
 imgCarta.src = `assets/cartas/${ card }.png`; //3H, JD
 imgCarta.classList.add('carta');
 return imgCarta;
};