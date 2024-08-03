import React, { useEffect } from 'react'


export default function DateTimeController({dateTime,setDateTime}) {


    useEffect(() => {
        const interval = setInterval(() => {
          const date = new Date();
          const formattedDate = date.toLocaleDateString();
          const formattedTime = date.toLocaleTimeString();
          setDateTime(`${formattedDate} - ${formattedTime}`);
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);
  return (
    <>
    
    <h4>{dateTime}</h4>
    
    </>
  )
}
