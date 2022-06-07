import { useUsers } from '../hooks/useUsers';
import { User } from '../interfaces/ReqRes.interface';

export const Users = () => {

  const {lastPage, nextPage, users} = useUsers();

  const renderItem = (user:User) => {
    return(
        <tr key={user.id.toString()}>
            <td><img src={user.avatar} style={{width: 35, borderRadius: 100}}/></td>
            <td>{user.last_name}, {user.first_name}</td>
            <td>{user.email}</td>
        </tr>
    )
  }

  return (
    <>
        <h3>Usuarios: </h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(renderItem)
                }
            </tbody>
        </table>
        <button 
        className='btn btn-primary'
        onClick={lastPage}
        >
                Anterior
        </button>
        &nbsp;
        <button 
        className='btn btn-primary'
        onClick={nextPage}
        >
                Siguiente
        </button>
    </>
  )
}
