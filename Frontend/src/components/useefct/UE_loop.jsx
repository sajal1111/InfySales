import { useEffect, useState } from 'react';

function UE_loop() {
  const [value, setValue] = useState('');
  const [count, setCount] = useState(-1);

  
  useEffect(() => {
    let len=value.length;
    if(len>=5) return;
    setCount(len)
    
    },[value]
    );



  const onChange = ({ target }) => setValue(target.value);

  return (
    <center>
    <div class='mx-auto'>
      <input type="text" className='border border-2' value={value} onChange={onChange} />
      <div>Number of changes: {count}</div>
    </div>
    </center>
  );
}
export default UE_loop;