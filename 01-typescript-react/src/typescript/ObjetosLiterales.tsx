interface Persona {
    nombreCompleto: string,
    edad: number,
    direccion: Direccion,
}
/* Reglas de validacion a los objetos */
interface Direccion {
    pais: string,
    casaNo: number
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: "Juan",
        edad:32,
        direccion: {
            pais: "Colombia",
            casaNo:43
        }
    }
    

  return (
     <>
        <div>Objetos Literales</div>
        <code>
            <pre>
                {/* {JSON.stringify(persona, null, 2)} */}
                {JSON.stringify(persona, null, 2)}
            </pre>
        </code>
     </> 
    
  )
}
