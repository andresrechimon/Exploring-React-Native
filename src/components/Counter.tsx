import { useState } from 'react'

export const Counter = () => {
  
  const [value, setValue] = useState<number>(0);

  const acum = (number:number) => {
    setValue(value + number);
  };

  return (
    <>
        <h3>Counter <small>{value}</small></h3>   
        <button 
        className='btn btn-primary'
        onClick={() => acum(1)}
        >+1</button>
        &nbsp;
        <button 
        className='btn btn-primary'
        onClick={() => acum(-1)}
        >-1</button>
    </>
  )
}
