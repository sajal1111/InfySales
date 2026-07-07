import React, { useState } from 'react';

function Count() {
  const [count, setCount] = useState(0);

  function addCount(){
    setCount((count)=>count+1);
  };

  function minusCount(){
    setCount((count)=>count-1);
  };

  return (
    <div>
      <p>
        <input type="button" value="+1" onClick={addCount} />
      </p>
      <p>
        <input type="button" value="-1" onClick={minusCount} />
      </p>
      <div>
        Count: {count}
      </div>
    </div>
  );
}

export default Count;
