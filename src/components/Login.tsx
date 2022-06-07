import { type } from "os"
import { useEffect, useReducer } from "react"

interface AuthState {
    validating:boolean,
    token:string | null,
    user: string,
    name: string
}

const initialState:AuthState = {
    validating:true,
    token:null,
    user: '',
    name: ''
}

type loginPayload = {
    user:string;
    name:string;
}

type authAction = {type: 'logout'} | {type: 'login', payload: loginPayload};

const authReducer = (state:AuthState, action:authAction):AuthState =>{
    switch (action.type) {
        case 'logout':
            return{
                validating:false,
                token:null,
                user: '',
                name: ''
            }
        case 'login':
            return{
                validating:false,
                token:'ABC',
                user: action.payload.user,
                name: action.payload.name
            }
        default:
            return state;
    }
}

export const Login = () => {

  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
        dispatch({type: 'logout'})
    }, 1500)
  },[]);

  const login = () => {
      dispatch({
          type: 'login', 
          payload: {user: 'Dekoi', name: 'Andrés'}
        })
  }
  const logout = () => {
      dispatch({
          type: 'logout'
        })
  }

  if(state.validating){
      return(
          <>
            <h3>Login</h3>
            <div className="alert alert-info">
                Validando...
            </div>
          </>
      )
  }
  

  return (
    <>
        <h3>Login</h3>
        {
            (state.token) 
            ? 
            <div className="alert alert-success">¡Validado!</div> 
            : 
            <div className="alert alert-danger">No pudo ser validado...</div>
        }
        {
            (state.token) 
            ? 
            <button onClick={logout} className="btn btn-danger">Log out</button>
            : 
            <button onClick={login} className="btn btn-primary">Login</button>
        }
    </>
  )
}
