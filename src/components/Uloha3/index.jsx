// // Zadání 1: Vytvořte stavovou proměnnou s výchozí hodnotou `'možná'`.
// // Zadání 2: Proměnnou vypište místo `ano/ne/možná`.
// // Zadání 3: Po kliknutí na tlačítko změňte `možná` na `ano`, `ano` na `ne`, případně `ne` na `možná`.

// export const Uloha3 = () => {
//   return (
//     <>
//       <h3>Prší v Brně: ano/ne/možná</h3>
//       <button>změnit</button>
//     </>
//   );
// };


//správně
import { useState } from 'react';

export const Uloha3 = () => {
  // Stavová proměnná s výchozí hodnotou 'možná'
  const [stav, setStav] = useState('možná');

  // Funkce pro změnu stavu
  const zmenStav = () => {
    if (stav === 'možná') {
      setStav('ano');
    } else if (stav === 'ano') {
      setStav('ne');
    } else {
      setStav('možná');
    }
  };

  return (
    <>
      <h3>Prší v Brně: {stav}</h3>
      <button onClick={zmenStav}>změnit</button>
    </>
  );
};