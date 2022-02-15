import React, { useEffect, useReducer } from 'react'

interface AuthState {
    validando: boolean,
    token: string | null,
    username: string,
    nombre: string
}

const initialState:AuthState = {
    validando: true,
    token: null,
    username: "",
    nombre: ""
}

type LoginPayload = {
    username: string,
    nombre: string
}
type AuthAction = 
    {type: "logout" } | {type: "login", payload: LoginPayload };


const authReducer = (state: AuthState, action: AuthAction ):AuthState => {

    switch (action.type) {
        case "logout":
            return {
                validando: false,
                token: null,
                nombre: "",
                username: "",
            }
        case "login":
            const {nombre, username} = action.payload;
            return {
                ...state,
                token: "abc123",
                nombre,
                username,
            }
        default:
            return state;
    }
}

export const Login = () => {

    const [{validando, token, nombre, username}, dispatch] = useReducer(authReducer, initialState);
    useEffect(() => {
      setTimeout(() => {
        dispatch({type: "logout"});
      }, 3000)
    }, [])
    
    const login = () => {
        dispatch({
            type: "login",
            payload: {
                nombre: "Juan",
                username: "JuanDev",
        }});
    }
    const logout = () => {
        dispatch({type: "logout"});
    }
  return (

    <>
        <h3>Login</h3>

        {validando ?  <div className="alert alert-info">Validando....</div> : 
        <>
            {
                token 
                ?   <>
                        <div className="alert alert-success">Autenticado como: {username} - nombre: {nombre}</div>
                        <button className='btn btn-danger' onClick={logout}>Logout</button>
                    </>
                :   <>
                        <div className="alert alert-danger">No Autenticado</div>
                        <button className='btn btn-primary me-3' onClick={login}>Login</button>
                    </>
            }
        </>
        }
    </>
  )
}
