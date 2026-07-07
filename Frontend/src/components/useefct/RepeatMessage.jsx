import { useEffect } from "react";

export default function RepeatMessage({ message }) //Componet
{
    useEffect(() =>
     {
      let id=setInterval(() => {
        console.log(message);
      }, 2000);

      return () => {
        clearInterval(id);
      };
    
    }, [message]);
  
    return <div className="message">I'm logging to console "{message}"</div>;
  }