export const Functions = () => {
    
  const add = (a:number, b:number):number => {
    return a + b;
  }

  return (
    <>
        <h3>Functions</h3>
        <span>El resultado es: {add(50, 50)}</span>
    </>
  )
}
