export const BasicTypes = () => {
  const name:string = 'Andrés';
  const age:number = 26;
  const isActive:boolean = true;
  const hobbies:string[] = ['Cs', 'Leer', 'Dormir'];

  return (
    <>
    <h3>Tipos básicos</h3>
    {name}, {age}: {{isActive} ? 'Activo' : 'Inactivo'}
    <hr/>
    { hobbies.join(', ') }
    </>
  )
}
