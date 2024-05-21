import React, { useState } from 'react';

const RandomNumberGenerator = () => {
  const [currentRandomNumber, setCurrentRandomNumber] = useState(0);

  const changeRandomNumber = (operation) => {
    const randomNumberChange = Math.floor(Math.random() * 51);

    if (operation === '+') {
      setCurrentRandomNumber((prevNumber) => prevNumber + randomNumberChange);
    } else if (operation === '-') {
      setCurrentRandomNumber((prevNumber) => prevNumber - randomNumberChange);
    }
  };

  return (
    <div>
      <p>Click{currentRandomNumber}</p>
      <button onClick={() => changeRandomNumber('+')}>+Rnd</button>
      <button onClick={() => changeRandomNumber('-')}>-Rnd</button>
    </div>
  );
};

export default RandomNumberGenerator;
