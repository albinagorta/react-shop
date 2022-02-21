import React from 'react';

//components
import CategoriaItem from '@components/CategoriaItem';

//hooks
import useGetCategoria from '@hooks/useGetCategoria';

//css
import '@styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/categories';


const CategoriaList = () => {

    const categorias = useGetCategoria(API);
    return (
        <ul>
            <li>
                <a href="/">Todos</a>
            </li>
            {
                categorias.map(cat => (
                    <CategoriaItem cat={cat} key={cat.id} />
                ))
            }
        </ul>
    );
}

export default CategoriaList;