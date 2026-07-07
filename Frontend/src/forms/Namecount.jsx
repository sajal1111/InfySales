import React, { useState } from 'react';

function Namecount() {
  const [count, setCount] = useState(10);
  function changeValue(event){
    event.preventdefault();
    var len=event.target.value.length;
    if(count>0)
    setCount(()=>10-len);
    else
    {
      alert("Are bhai ruk jaa")
    }
  };

  return (
    <div>
      <p>
                F.Name 
                <input type="text" name="fn" onChange={changeValue} />
      </p>
      <div>
        Count: {count}
      </div>
    </div>
  );
}

export default Namecount;
