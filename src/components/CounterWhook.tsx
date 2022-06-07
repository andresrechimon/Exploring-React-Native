import { useCounter } from '../hooks/useCounter';

export const CounterWhook = () => {

  const {value, acum} = useCounter();

  return (
    <>
        <h3>Counter con Hook <small>{value}</small></h3>   
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
