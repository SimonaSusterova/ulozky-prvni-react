// import { useCasVSekundach } from './hodiny'

// // Zadání: Pomocí předchystané stavové proměnné, která se mění každou sekundu, zobrazte aktuální čas ve formátu 7:49:05.

// // Nápověda: Pokud je v `casVSekundach` nula, pak je 0:00:00. Pokud je v `casVSekundach` 60, pak je 0:01:00. Pokud je v `casVSekundach` 67, pak je 0:01:07.

// export const Bonus3 = () => {
//   const casVSekundach = useCasVSekundach();

//   return (
//     <>
//       Čas právě teď: <b>{casVSekundach}</b>
//     </>
//   );
// };


//správně
import { useCasVSekundach } from './hodiny';

export const Bonus3 = () => {
  const casVSekundach = useCasVSekundach();

  const hodiny = Math.floor(casVSekundach / 3600);
  const minuty = Math.floor((casVSekundach % 3600) / 60);
  const sekundy = casVSekundach % 60;

  // Pomocná funkce pro doplnění nul (např. 4 => "04")
  const dvojcislo = (n) => String(n).padStart(2, '0');

  return (
    <>
      Čas právě teď: <b>{hodiny}:{dvojcislo(minuty)}:{dvojcislo(sekundy)}</b>
    </>
  );
};