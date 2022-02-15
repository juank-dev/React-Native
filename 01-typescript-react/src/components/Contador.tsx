import { useState } from "react"

export const Contador = () => {
  const [value, setValue] = useState<number>(0);

  const acumular = (numero: number) => {
    setValue(value + numero);
  }
  return (
    <>
      <div>Contador: {value}</div>
      <button className="btn btn-primary me-3" onClick={() => acumular(1)}> +1 </button>
      <button className="btn btn-primary" onClick={() => acumular(-1)}> -1 </button>
      </>
  )
}
