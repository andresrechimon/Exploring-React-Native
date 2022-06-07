interface Person{
    name:string;
    age:number;
    address: Address
}

interface Address{
    country:string;
    homeN:number;
}

export const LiteralObjects = () => {

  const person:Person = {
      name: 'Andrés',
      age: 26,
      address: {
          country: 'Argentina',
          homeN: 1877
      }
  }

  return (
    <>
        <h3>Objectos Literales</h3>
        <code>
            <pre>
                {JSON.stringify(person, null, 2)}
            </pre>
        </code>
    </>
  )
}
