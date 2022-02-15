
import { useUsuario } from '../hooks/useUsuario';
import { Usuario } from "../interfaces/requestApi"

export const Usuarios = () => {
    
    const {usuarios, pageNumber, setNumber} = useUsuario();
    
    const renderUsersTable = ({id, first_name, last_name, email, avatar}: Usuario) => {
        return (

            <tr key={id.toString()}>
                <td>
                    <img src={avatar} alt="avatar" style={{width: 40, borderRadius: "50%"}} />
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }

   
  return (
      <>
        <h3>Usuarios</h3>
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
                    usuarios.map(usuario => {
                        return renderUsersTable(usuario)
                    })
                }
            </tbody>
        </table>
        <div className='text-center'>
            {
                pageNumber !== 1 && 
                <button className="btn btn-secondary me-3" onClick={() => setNumber(pageNumber - 1)}>
                    Anterior
                </button>
            }
            
            <button className="btn btn-secondary"  onClick={() => setNumber(pageNumber + 1)}>
                Siguiente
            </button>
        </div>
      </>
  )
}
