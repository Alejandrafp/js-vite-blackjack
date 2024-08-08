
/**
 * 
 * @param {Array<string>} deck es un arreglo de String
 * @returns {String} Retorna la carta del deck
 */

export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const card = deck.pop();
    return card;
}
