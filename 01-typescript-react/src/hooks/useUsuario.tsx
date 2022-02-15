import  { useEffect, useState } from 'react'
import { requestApi } from '../api/reqRes';
import { RequestAPIListado, Usuario } from '../interfaces/requestApi';

export const useUsuario = () => {
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [number, setNumber] = useState<number>(0);
    useEffect(() => {
        //Llamado API
        
        handlePagination(number);
    }, [number])

    const handlePagination = async (number: number = 0) => {
        setPageNumber(number);
        try {
            let res = await requestApi.get<RequestAPIListado>("/users", { params: { page: number } });
            setUsuarios(res.data.data);
        } catch (err) {
            console.warn(err);
        }
    }
  return {
    usuarios,
    pageNumber,
    setNumber
  }
}
