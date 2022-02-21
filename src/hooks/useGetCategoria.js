import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetCategoria = (API) => {

    const [categorias, setCategorias] = useState([]);

    useEffect(async () => {
        const response = await axios(API);
        setCategorias(response.data);
    }, [])

    return categorias;
}

export default useGetCategoria;


