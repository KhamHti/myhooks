import React, { useCallback, useState } from 'react';
import { Hello } from './Hello';
import { Square } from './Square';


const App= () => {
  const favsNum = [2, 24, 26];
  const [count, setCount] =  useState(0);

  const increment = useCallback((n) => {
      setCount(c => c + n);
  }, [setCount]);

  return (
    <div >
      <Hello increment={increment} />
      <div>count: {count}</div>
      {favsNum.map(n => {
        return (
          <Square increment={increment} n={n} key={n}/> 
        )
      })}
    </div>
  );
}

export default App;
