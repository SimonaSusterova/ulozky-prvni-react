// // Zadání: Pomocí dvou stavových proměnných s výchozí hodnotou 0, které se budou měnit podle vstupních políček, vypište do `<output></output>` jejich součet.

// export const Bonus4 = () => {
//   return (
//     <>
//       <input type="number" defaultValue="0" /> +{' '}
//       <input type="number" defaultValue="0" /> = <output>0</output>
//     </>
//   );
// };


//správně
import { useState } from 'react';

export const Bonus4 = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const handleChangeA = (event) => {
    setA(Number(event.target.value));
  };

  const handleChangeB = (event) => {
    setB(Number(event.target.value));
  };

  return (
    <>
      <input type="number" value={a} onChange={handleChangeA} /> +{' '}
      <input type="number" value={b} onChange={handleChangeB} /> ={' '}
      <output>{a + b}</output>
    </>
  );
};