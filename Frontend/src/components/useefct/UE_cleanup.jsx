
import { useEffect,useState } from 'react';
import RepeatMessage from "./RepeatMessage";

  
   function UE_cleanup() {
    const [message, setMessage] = useState("Hello, World!");
  
    return (
      <div className="App">
        <h3>Type the message to log to console</h3>
        <input
          type="text" className='border border-2'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <RepeatMessage message={message} />
      </div>
    );
  }
export default UE_cleanup;
