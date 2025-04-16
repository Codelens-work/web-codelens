/*Modifica el array original. NO PASAR ARRAY DE ARTÍCULOS*/
export const shuffleArray = (arrayToShuffle) => {
  let m = arrayToShuffle.length,
      t,
      i;
  while(m){
    
    i = Math.floor(Math.random() * m--);
    t = arrayToShuffle[m];
    arrayToShuffle[m] = arrayToShuffle[i];
    arrayToShuffle[i] = t;
  }
  return arrayToShuffle;
}