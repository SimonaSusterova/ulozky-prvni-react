// Zadání 1: Pomocí události `change` na vstupním políčku a vlastnosti `event.target.value` ukládejte do stavu, co uživatel napsal.
// Zadání 2: Mezi tagy `<b></b>` vložte napsaný text.
// Zadání 3. V dalším odstavci `<p>` zobrazte, kolik má text znaků.
// Zadání 4. Poslední odstavec zobrazte pouze v případě, že je text kratší než 8 znaků.

// export const Bonus1 = () => {
//   return (
//     <>
//       <label>
//         Napiš něco: <input />
//       </label>
//       <p>
//         Do políčka výše uživatel napsal: <b>@TODO</b>
//       </p>
//       <p>Počet znaků: 0</p>
//       <p>Jako heslo by text neobstál.</p>
//     </>
//   );
// };


//správně
import React, { useState } from 'react';

export const Bonus1 = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <label>
        Napiš něco: <input type="text" onChange={handleChange} />
      </label>
      <p>
        Do políčka výše uživatel napsal: <b>{text}</b>
      </p>
      <p>Počet znaků: {text.length}</p>
      {text.length < 8 && <p>Jako heslo by text neobstál.</p>}
    </>
  );
};