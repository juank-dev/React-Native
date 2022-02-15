import { useCounter } from "../hooks/useCounter"

export const ContadorHook = () => {
  const {value, acumular} = useCounter(15);
  return (
    <>
      <div>Contador: {value}</div>
      <button className="btn btn-primary me-3" onClick={() => acumular(1)}> +1 </button>
      <button className="btn btn-primary" onClick={() => acumular(-1)}> -1 </button>
      </>
  )
}
