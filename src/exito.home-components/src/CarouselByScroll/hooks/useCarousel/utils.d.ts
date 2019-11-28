/**
 * Return the reaming number of items to use,
 * @param firstNumber number of items from the array
 * @param secondNumber number of items to show
 */
export declare const getNumberOfRemainingFromNumber: (firstNumber: number, secondNumber: number) => number;
/**
 * Retorna el número de items que no se van a mostrar de acuerdo a los itemPerRow
 *  indicados y a los elementos visualizándose actualmente,
 * retorna 0 si no se están perdiendo elementos o retorna el número de items que se van
 * a perder en el siguiente click del arrow
 * @param numberOfElements Numero de items del array
 * @param itemsToShow Numero de items mostrándose actualmente
 */
export declare const getNumberOfRemaining: (numberOfElements: number, itemsToShow: number, itemsPerRow: number) => {
    reamingNumber: number;
    onReamingNumber: number;
};
