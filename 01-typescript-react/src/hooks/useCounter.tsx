import { useState } from 'react';

export const useCounter = (initial: number = 10) => {
    const [value, setValue] = useState<number>(initial);

    const acumular = (numero: number) => {
      setValue(value + numero);
    }

    return {value, acumular};
}
