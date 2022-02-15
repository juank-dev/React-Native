
export const TiposBasicos = () => {

    /* let nombre:string | number = "Juan"; */
    const nombre: string = "JuanK";
    const edad: number = 32;
    const estaActivo: boolean = true;

    const poderes: string[] = []; // "Velocidad", "Volar", "Respirar bajo el agua"
    /* const poderes: (string| number)[] = []; si son 2 tipos de datos*/


  return (
      <>
            <h3>TiposBasicos</h3>
            {nombre} - {edad} - {(estaActivo) ? "Activo": "Inactivo"}
            <br />
            {poderes.join(", ")}
      </>

  )
}
